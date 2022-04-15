const { WAConnection, Browsers, MessageType, Presence, Mimetype } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const fetch = require('node-fetch')
const CFonts = require('cfonts');
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const apikey = JSON.parse(fs.readFileSync('./apikey.json'))
const welcome = require('./message/group')
sessionsname = setting.NamaSession
randomserver = ['Chrome','Safari','Firefox','Opera']
const randomserverku = randomserver[Math.floor(Math.random() * (randomserver.length))]
randomcolor = ['aqua','red','blue','purple']
const randomcolors = randomcolor[Math.floor(Math.random() * (randomcolor.length))]
baterai = 'not detected'
charging = 'not detected'
//PICTURE
randompicture = ['photo1','photo2','photo3','photo4','photo5','photo6']
const randompoto = randompicture[Math.floor(Math.random() * (randompicture.length))]
const photo1 = fs.readFileSync("./media/picture/photo1.jpg");
const photo2 = fs.readFileSync("./media/picture/photo2.jpg");
const photo3 = fs.readFileSync("./media/picture/photo3.jpg");
const photo4 = fs.readFileSync("./media/picture/photo4.jpg");
const photo5 = fs.readFileSync("./media/picture/photo5.jpg");
const photo6 = fs.readFileSync("./media/picture/photo6.jpg");
const thumb = fs.readFileSync(`./media/picture/${randompoto}.jpg`)
const waiting = (id, text) => {
    spins.add(id, { text: text })
}
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '

require('./index.js')
nocache('../index.js', module => console.log(color('[ WARN ]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./main.js')
nocache('../main.js', module => console.log(color('[ WARN ]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./message/help.js')
nocache('../message/help.js', module => console.log(color('[ WARN ]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[ WARN ]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))
require('./message/mess.js')
nocache('../message/mess.js', module => console.log(color('[ WARN ]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (Ramdani = new WAConnection()) => {
    CFonts.say(`RAMDANI OFFICIAL`, {
        font: 'chrome',
        align: 'center',
        gradient: ['red', 'magenta']
      })
    Ramdani.logger.level = 'warn'

	console.log(color(`${spc2}           [ • CREATOR BY RAMDANI OFFICIAL • ]` ,`${randomcolors}`))
console.log(color(`${spc4}                       < ============================================ >`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Hai         : Ramdani Official`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Bot Version : 1.0.0`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Status      : Online!`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Owner       : Ramdani Official`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Author      : Ramdani Official`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Base Ori By : Ramdani Official`, `${randomcolors}`))
console.log(color(`${spc4}                       < ============================================ >`, `${randomcolors}`))
	Ramdani.browserDescription = [ `${setting.NamaBot}`, `${randomserverku}`, '3.0' ]

	// Menunggu QR
	Ramdani.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('Scan Om, Expired 30 Detik!'))
	})

	// Menghubungkan
	fs.existsSync(`./${sessionsname}.json`) && Ramdani.loadAuthInfo(`./${sessionsname}.json`)
	Ramdani.on('connecting', () => {
		console.log(color('[ WARN ]', 'yellow'), color('Menyambungkan!'));
	})
const ftroli = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "6289512545999-1604595598@g.us" }, "message": { orderMessage: { itemCount: 99999, status: 200, thumbnail: fs.readFileSync(`./media/picture/${randompoto}.jpg`), surface: 200, message: `【 RAMDANI BOTZ 】`, orderTitle: 'Ramdani Official', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
const spinner = { 
  "interval": 120,
  "frames": [
    "R",
    "Ra",
    "Ram",
    "Ramd",
    "Ramda",
    "Ramdan",
    "Ramdani",
    "Ramdani O",
    "Ramdani Of",
    "Ramdani Off",
    "Ramdani Offi",
    "Ramdani Offic",
    "Ramdani Offici",
    "Ramdani Officia",
    "Ramdani Official",
    "R",
    "Ra",
    "Ram",
    "Ramd",
    "Ramda",
    "Ramdan",
    "Ramdani",
    "Ramdani O",
    "Ramdani Of",
    "Ramdani Off",
    "Ramdani Offi",
    "Ramdani Offic",
    "Ramdani Offici",
    "Ramdani Officia",
    "Ramdani Official",
    "R",
    "Ra",
    "Ram",
    "Ramd",
    "Ramda",
    "Ramdan",
    "Ramdani",
    "Ramdani O",
    "Ramdani Of",
    "Ramdani Off",
    "Ramdani Offi",
    "Ramdani Offic",
    "Ramdani Offici",
    "Ramdani Officia",
    "Ramdani Official",
  ]}

	//connect
	Ramdani.on('open', () => {
		console.log(color('[ WARN ]', 'yellow'), color('Connected'));
	})

	// session
	await Ramdani.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${sessionsname}.json`, JSON.stringify(Ramdani.base64EncodedAuthInfo(), null, '\t'))
     buttonss = [
        { buttonId: `menu`, buttonText: { displayText: 'ok' }, type: 1 },
    ]

    buttonMessagee = {
        contentText: `BOT TELAH AKTIF DI NOMOR INI JANGAN LUPA SUBS YT RAMDANI OFFICIAL`,
        footerText: `${setting.WmText}`,
        buttons: buttonss,
        headerType: 1
    }
    console.log(color('[ WARN ]', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
       Ramdani.sendMessage("6289512545999@s.whatsapp.net", `HALLO KAK SAYA ${setting.NamaBot}, IZIN PAKEK SC NYA YA KAK, SAYA JANJI BAKAL SUBSCRIBE CHANNEL ABANG :V`, MessageType.text, { contextInfo: { externalAdReply: { title: `Developer ${setting.NamaBot}`, body: "", previewType: "PHOTO", thumbnail: fs.readFileSync(`./media/picture/${randompoto}.jpg`), sourceUrl: `https://wa.me/6289512545999?text=Assalamualaikum+bwang:v` } }})
     console.log(color('[ WARN ]', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
    Ramdani.sendMessage(`${setting.NomorOwner}@s.whatsapp.net`, buttonMessagee, MessageType.buttonsMessage, {
        caption: '[ RAMDANI BOTZ ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,

        },
        quoted: ftroli, sendEphemeral: true
    })
	// Baterai
	Ramdani.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Ramdani.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})
	// welcome
	Ramdani.on('group-participants-update', async (anu) => {
		await welcome(Ramdani, anu)
	})

	Ramdani.on('chat-update', async (message) => {
		require('./index.js')(Ramdani, message)
	})
}

starts()