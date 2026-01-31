const { loading } = require('./starting')
const CFonts = require('cfonts');
const chalk = require('chalk'); 
const { color, bgcolor, ConsoleLog, biocolor } = require('../lib/color')

const Connecting = async ({ update, DinzBotz, Boom, DisconnectReason, sleep, operate }) => {

    const { connection, lastDisconnect } = update

    if (connection === 'connecting') {

    }

    if (connection === 'close') {
        let messageconnect = new Boom(lastDisconnect?.error)?.output.statusCode

        if (messageconnect === DisconnectReason.badSession) {
            console.log(chalk.red.bold(`❌ Sesi Buruk (Bad Session). Silakan hapus folder session dan scan ulang.`))
            setTimeout(() => { operate(); }, 10000)
        } else if (messageconnect === DisconnectReason.connectionClosed) {
            console.log(chalk.yellow("⚠️ Koneksi terputus, mencoba menyambung kembali..."));
            operate();
        } else if (messageconnect === DisconnectReason.connectionReplaced) {
            console.log(chalk.red("⚠️ Koneksi diganti. Ada sesi baru dibuka di tempat lain."));
            process.exit();
        } else if (messageconnect === DisconnectReason.loggedOut) {
            console.log(chalk.red.bold(`❌ Perangkat keluar (Logged Out). Silakan scan ulang.`));
            process.exit();
        } else if (messageconnect === DisconnectReason.timedOut) {
            console.log(chalk.yellow("⏳ Waktu koneksi habis (Timed Out), mereload..."));
            operate();
        } else {
            console.log(chalk.red(`⚠️ Terputus: ${messageconnect}`))
            operate();
        }
    }


    if (connection === 'open') {

        await loading() 
        console.clear()
        

        CFonts.say('HUTAO', {
            font: 'block',
            align: 'center',          
            gradient: ['red', 'magenta'], 
            background: 'transparent',
            letterSpacing: 1,
            lineHeight: 1,
            space: true,
            maxLength: '0',
            independentGradient: true,
            transitionGradient: true,
        });
        let userBot = DinzBotz.user.id || DinzBotz.user.jid
        let nameBot = DinzBotz.user.name || 'Hutao Bot'
        
        console.log(chalk.bold.green(`__________________________________________`));
        console.log(chalk.bold.white(`             STATISTICS BOT`));
        console.log(chalk.bold.green(`__________________________________________`));
        console.log(chalk.magenta(` 👻 NAME    : `) + chalk.white(nameBot));
        console.log(chalk.magenta(` 📱 NUMBER  : `) + chalk.white(userBot.split(':')[0]));
        console.log(chalk.magenta(` 🚀 STATUS  : `) + chalk.green('CONNECTED ✅'));
        console.log(chalk.bold.green(`__________________________________________`));
        console.log(chalk.yellow('\n Wangy wangy Hu Tao siap melayani ~ ❤️'));
    }
}

module.exports = { Connecting }
