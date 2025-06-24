const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//======================================================Settings Bot=========================================================================//
global.owner = '6285880393403'
global.versi = version
global.namaOwner = "DanzModss"
global.packname = 'Bot WhatsApp'
global.botname = 'Evil Crasher'
global.botname2 = 'Evil Crasher'

//=====================================//
global.linkOwner = "https://wa.me/6285880393403"
global.linkGrup = "https://chat.whatsapp.com/IrUTlrbA8TJ3YKthKuPaZ0"

//=====================================//
global.delayJpm = 3500
global.delayPushkontak = 6000

//=====================================//
global.linkSaluran = "https://whatsapp.com/channel/0029VajXGCR5q08lnj8urA3E"
global.idSaluran = "120363333501951612@newsletter"
global.namaSaluran = "EvilCrasher || DanzModss"

//=====================================//
global.dana = "-" //Isi aja payment lu
global.ovo = "-"
global.gopay = "-"

//=====================================//
global.image = {
menu: "https://files.catbox.moe/fqvviu.jpg", //Ubah aja jdi image lu
reply: "https://files.catbox.moe/fqvviu.jpg", 
logo: "https://files.catbox.moe/45q5aa.jpg", 
qris: "https://files.catbox.moe/45q5aa.jpg"//Ubah aja jdi foto qris lu
}

//=====================================//
global.mess = {
	owner: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Khusus Owner Bot ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	admin: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Khusus Admin Group ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	botAdmin: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Bot Harus Jadi Admin Terlebih dahulu ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	group: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya berlaku di Group ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	private: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya dapat di lakukan di private cht ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	prem: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya Untuk User Premium ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})