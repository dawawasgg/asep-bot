let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let arietube = '6289509960601@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `
โณนโฃ ๐๐ฉ๐๐ง ๐๐๐ฌ๐ ๐๐๐ฐ๐ ๐๐๐ โฃโณผ
  
${namabot}

โโโ
โใ Hi ๐ ใ
โโฌโ ใ Bang ใ
โฌโโโโโโโโโโโโโโ โณน
โ
โญโโใ *SEWABOT* ใ
โ  1 BULAN : IDR 10.000 (10k)
โฐโโโโโ
โ
โญโ [ KELEBIHAN BOT ]
โ  ๏ผฏ๏ผฎ 24 ๏ผช๏ผก๏ผญ
โ  FITUR BANYAK
โฐโโโโโ
โ
โญโ[ KEUNTUNGAN ]
โ  ANTI LINK ( AUTO KICK )
โ  WELCOME ( On/Off )
โ  DAN RATUSAN FITUR LAINYA
โฐโโโโโ
โ
โญโ[ *MINAT CHAT* ]
โ  ๐ช wa.me/6283160327945?text=Assalamualaikum%20Mau%20sewabot%20bang
โฐโโโโโ
โ
โญโ[ *ALL PAYMENT* ]โ
โโฌโโโโโโโโโโโโโ โณน
   โโ  Jangan Lupa Donasinya ya kak
   โโโโโโโโโโโโโโโ โณน



*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6283160327945@s.whatsapp.net`
  },
  footerText: '',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
