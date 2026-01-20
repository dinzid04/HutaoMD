/*

  !- Credits By Skyzopedia
  https://wa.me/6285624297894
  
*/

const axios = require('axios');
const chalk = require("chalk");
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const fs = require("fs");
const FormData = require('form-data');
const crypto = require("crypto");
const { lookup } = require('mime-types');

async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res?.duration == 0) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				data.push({
					type: 'watermark',
					url: 'https://www.tikwm.com' + res?.wmplay || "/undefined",
				}, {
					type: 'nowatermark',
					url: 'https://www.tikwm.com' + res?.play || "/undefined",
				}, {
					type: 'nowatermark_hd',
					url: 'https://www.tikwm.com' + res?.hdplay || "/undefined"
				})
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			
		}
	});
}


function pinterest(query){


return new Promise(async(resolve,reject) => {


axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + query, {


headers: {


"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"


}


}).then(({ data }) => {


const $ = cheerio.load(data)


const result = [];


const hasil = [];


 $('div > a').get().map(b => {


const link = $(b).find('img').attr('src')


result.push(link)


});


result.forEach(v => {


if(v == undefined) return


hasil.push(v.replace(/236/g,'736'))


})


hasil.shift();


resolve(hasil)


})


})


}

async function pinterest2(query) {
	return new Promise(async (resolve, reject) => {
		const baseUrl = 'https://www.pinterest.com/resource/BaseSearchResource/get/';
		const queryParams = {
			source_url: '/search/pins/?q=' + encodeURIComponent(query),
			data: JSON.stringify({
				options: {
					isPrefetch: false,
					query,
					scope: 'pins',
					no_fetch_context_on_resource: false
				},
				context: {}
			}),
			_: Date.now()
		};
		const url = new URL(baseUrl);
		Object.entries(queryParams).forEach(entry => url.searchParams.set(entry[0], entry[1]));
		try {
			const json = await (await fetch(url.toString())).json();
			const results = json.resource_response?.data?.results?? [];
			const result = results.map(item => ({
				pin: 'https://www.pinterest.com/pin/' + item.id?? '',
				link: item.link?? '',
				created_at: (new Date(item.created_at)).toLocaleDateString('id-ID', {
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				}) ?? '',
				id: item.id?? '',
				images_url: item.images?.['736x']?.url?? '',
				grid_title: item.grid_title?? ''
			}));
			resolve(result);
		} catch (e) {
			reject([])
		}
	});
}

async function mediafire (query) {
	return new Promise((resolve, reject) => {
		axios.get(query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').text();
				const size = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(1) > span').text();
				const upload_date = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
				const link = $('#downloadButton').attr('href')
				const hsil = {
					judul: link.split('/')[5],
					upload_date: upload_date,
					size: size,
					mime: link.split('/')[5].split('.')[1],
					link: link
				}
				resolve(hsil)
			})
			.catch(reject)
	})
}

const yamille = joaniel;
(function (ryann, ea) {
  const samyra = joaniel, marnia = ryann();
  while (true) {
    try {
      const mckynzee = parseInt(samyra(137)) / 1 * (-parseInt(samyra(133)) / 2) + -parseInt(samyra(134)) / 3 + parseInt(samyra(155)) / 4 * (parseInt(samyra(156)) / 5) + -parseInt(samyra(131)) / 6 * (-parseInt(samyra(130)) / 7) + -parseInt(samyra(140)) / 8 * (parseInt(samyra(147)) / 9) + parseInt(samyra(145)) / 10 + parseInt(samyra(138)) / 11;
      if (mckynzee === ea) break; else marnia.push(marnia.shift());
    } catch (beril) {
      marnia.push(marnia.shift());
    }
  }
}(altavious, 888830));
Jimp = require(yamille(154))
function joaniel(wendolyne, nyier) {
  const enalina = altavious();
  return joaniel = function (laurae, mekelle) {
    laurae = laurae - 127;
    let ralphine = enalina[laurae];
    return ralphine;
  }, joaniel(wendolyne, nyier);
}
function altavious() {
  const jaylenn = ["inferenceengine", "push", "21AoSGqU", "225006xOkcNu", "concat", "472390FPofBK", "4809828vvqtte", "data", "model_version", "3NUOcvQ", "14047187eKUyBb", "error", "3013792ZhnCJd", "okhttp/4.9.3", ".ai/", "enhance_image_body.jpg", "from", "10610670esKiBu", "append", "18nRsxLl", "submit", "https", "image", ".vyro", "image/jpeg", "enhance", "jimp", "24448HhNNWt", "1230ttmiGH", "Keep-Alive"];
  altavious = function () {
    return jaylenn;
  };
  return altavious();
}
async function remini(kyoko, tysa) {
  return new Promise(async (majeed, tamicko) => {
    const deamber = joaniel;
    let milahn = [deamber(153), "recolor", "dehaze"];
    milahn.includes(tysa) ? tysa = tysa : tysa = milahn[0];
    let kymire, nazar = new FormData, lennel = deamber(149) + "://" + deamber(128) + deamber(151) + deamber(142) + tysa;
    nazar[deamber(146)](deamber(136), 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=uttf-8"}), nazar[deamber(146)](deamber(150), Buffer[deamber(144)](kyoko), {filename: deamber(143), contentType: deamber(152)}), nazar[deamber(148)]({url: lennel, host: deamber(128) + deamber(151) + ".ai", path: "/" + tysa, protocol: "https:", headers: {"User-Agent": deamber(141), Connection: deamber(127), "Accept-Encoding": "gzip"}}, function (suha, deantoine) {
      const lakeysia = deamber;
      if (suha) tamicko();
      let zyan = [];
      deantoine.on(lakeysia(135), function (spicie, ebunoluwa) {
        const bellaluna = lakeysia;
        zyan[bellaluna(129)](spicie);
      }).on("end", () => {
        const camden = lakeysia;
        majeed(Buffer[camden(132)](zyan));
      }), deantoine.on(lakeysia(139), shady => {
        tamicko();
      });
    });
  });
}
// NEW
async function mediafire(url) {
    try {  
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);
        
        const fileName = $('.dl-btn-label').attr('title')
        const fileSize = $('.details li:contains("File size") span').text().trim()
        const extension = fileName.split('.').pop()
        const mimeType = lookup(extension.toLowerCase())
        const uploadDate = $('.details li:contains("Uploaded") span').text().trim()
        const downloadUrl = $('.download_link a.input').attr('href')
        
        return {
            fileName,
            fileSize,
            mimeType,
            uploadDate,
            downloadUrl
        }
        
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null;
    }
}
function isUrl(str) {
    const pattern = /https?:\/\/[^\s]+/g;
    return pattern.test(str);
}
async function snck(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/snackvideo?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengakses API IGDL:", error);
    throw error;
  }
}
async function getCookies() {
      try {
        const response = await axios.get('https://www.pinterest.com/csrf_error/');
        const setCookieHeaders = response.headers['set-cookie'];
        if (setCookieHeaders) {
          const cookies = setCookieHeaders.map(cookieString => {
            const cookieParts = cookieString.split(';');
            const cookieKeyValue = cookieParts[0].trim();
            return cookieKeyValue;
          });
          return cookies.join('; ');
        } else {
          console.warn('No set-cookie headers found in the response.');
          return null;
        }
      } catch (error) {
        console.error('Error fetching cookies:', error);
        return null;
      }
    }
//
async function pinterest(query) {
        try {
          const cookies = await getCookies(); // Pastikan fungsi getCookies() sudah didefinisikan
          if (!cookies) {
            console.log('Failed to retrieve cookies. Exiting.');
            return [];
          }

          const url = 'https://www.pinterest.com/resource/BaseSearchResource/get/';

          const params = {
            source_url: `/search/pins/?q=${encodeURIComponent(query)}`,
            data: JSON.stringify({
              "options": {
                "isPrefetch": false,
                "query": query,
                "scope": "pins",
                "no_fetch_context_on_resource": false
              },
              "context": {}
            }),
            _: Date.now()
          };

          const headers = {
            'accept': 'application/json, text/javascript, */*, q=0.01',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.9',
            'cookie': cookies,
            'dnt': '1',
            'referer': 'https://www.pinterest.com/',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-full-version-list': '"Not(A:Brand";v="99.0.0.0", "Microsoft Edge";v="133.0.3065.92", "Chromium";v="133.0.6943.142"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"10.0.0"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'x-app-version': 'c056fb7',
            'x-pinterest-appstate': 'active',
            'x-pinterest-pws-handler': 'www/[username]/[slug].js',
            'x-pinterest-source-url': '/hargr003/cat-pictures/',
            'x-requested-with': 'XMLHttpRequest'
          };

          const {
            data
          } = await axios.get(url, {
            headers: headers,
            params: params
          });

          const container = [];
          const results = data.resource_response?.data?.results?.filter((v) => v.images?.orig) || [];

          results.forEach((result) => {
            container.push({
              upload_by: result.pinner?.username || 'Unknown',
              fullname: result.pinner?.full_name || 'Unknown',
              followers: result.pinner?.follower_count || 0,
              caption: result.grid_title || 'No caption',
              image: result.images.orig.url,
              source: "https://id.pinterest.com/pin/" + result.id,
            });
          });

          return container;
        } catch (error) {
          console.error('Pinterest Error:', error);
          return [];
        }
      }
      async function tiktokSearchVideo(query) {
	return new Promise(async (resolve, reject) => {
		axios("https://tikwm.com/api/feed/search", {
			headers: {
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				cookie: "current_language=en",
				"User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
			},
			data: {
				keywords: query,
				count: 12,
				cursor: 0,
				web: 1,
				hd: 1,
			},
			method: "POST",
		}).then((res) => {
			resolve(res.data.data);
		});
	});
}
async function ephoto(url, texk) {
  let gT = await axios.get(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
    }
  });
  
  let $ = cheerio.load(gT.data);
  let text = texk;
  let token = $("input[name=token]").val();
  let build_server = $("input[name=build_server]").val();
  let build_server_id = $("input[name=build_server_id]").val();
  
  // Manual form data construction
  const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
  let formData = [
    `--${boundary}`,
    'Content-Disposition: form-data; name="text[]"',
    '',
    text,
    `--${boundary}`,
    'Content-Disposition: form-data; name="token"',
    '',
    token,
    `--${boundary}`,
    'Content-Disposition: form-data; name="build_server"',
    '',
    build_server,
    `--${boundary}`,
    'Content-Disposition: form-data; name="build_server_id"',
    '',
    build_server_id,
    `--${boundary}--`,
    ''
  ].join('\r\n');
  
  let res = await axios({
    url: url,
    method: "POST",
    data: formData,
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      cookie: gT.headers["set-cookie"]?.join("; "),
      "Content-Type": `multipart/form-data; boundary=${boundary}`
    }
  });
  
  let $$ = cheerio.load(res.data);
  let json = JSON.parse($$("input[name=form_value_input]").val());
  json["text[]"] = json.text;
  delete json.text;
  
  let { data } = await axios.post(
    "https://en.ephoto360.com/effect/create-image", 
    new URLSearchParams(json), 
    {
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        cookie: gT.headers["set-cookie"].join("; ")
      }
    }
  );
  
  return build_server + data.image;
}

module.exports = { pinterest, pinterest2, remini, mediafire, tiktokDl, isUrl, snck, getCookies, pinterest, tiktokSearchVideo, ephoto }