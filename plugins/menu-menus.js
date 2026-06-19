import fetch from 'node-fetch'
import os from 'os'

let handler = async (m, { conn, usedPrefix, command }) => {

  let mentionedJid = m.mentionedJid?.[0]
  let userId = mentionedJid || m.sender
  let username = `@${userId.split('@')[0]}`
  let name = await conn.getName(m.sender)

  let totalUsers = Object.keys(global.db.data.users).length
  let totalCommands = Object.values(global.plugins).filter(v => v.help && v.tags).length
  let isMain = conn.user.jid === global.conn.user.jid ? 'Principal' : 'Sub-Bot'

  let used = process.memoryUsage().rss / 1024 / 1024
  let ram = used.toFixed(2) + ' MB'

  let start = process.hrtime.bigint()
  await conn.sendPresenceUpdate('available', m.chat)
  let end = process.hrtime.bigint()
  let latency = (Number(end - start) / 1e6).toFixed(4) + ' ms'

  let uptime = process.uptime()
  let h = Math.floor(uptime / 3600)
  let mnt = Math.floor((uptime % 3600) / 60)
  let s = Math.floor(uptime % 60)
  let uptimeText = `${h}h ${mnt}m ${s}s`
  let PF = usedPrefix

  let menuText = ''

  switch (command) {

    case 'menudescargas':
    case 'menudl':
    case 'menudow':
      menuText = `*╭─ »* \`ᴍ ᴇ ɴ ᴜ - ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ\`  *ׁ  ♡ა*
*│✿* ${PF}hentai
*│✿* ${PF}soundcloud2
*│✿* ${PF}animedl
*│✿* ${PF}fdroid
*│✿* ${PF}gitclone + _url_
*│✿* ${PF}facebook
*│✿* ${PF}fb
*│✿* ${PF}imagen
*│✿* ${PF}mediafire
*│✿* ${PF}mediafire2
*│✿* ${PF}mega
*│✿* ${PF}pinterest
*│✿* ${PF}playaudio
*│✿* ${PF}playvideo
*│✿* ${PF}soundcloud + _nombre o artista_
*│✿* ${PF}spotify
*│✿* ${PF}stickerlydl + _url_
*│✿* ${PF}terabox + _url_
*│✿* ${PF}twitter
*│✿* ${PF}ytmp3 + _text o link_
*│✿* ${PF}ytmp3doc + _text_
*│✿* ${PF}ytmp4 + _text o link_
*│✿* ${PF}ytmp4doc + _text_
*│✿* ${PF}ytmp42 + _url_
*│✿* ${PF}xnxx
*│✿* ${PF}xvideos
*│✿* ${PF}yta + _url_
*│✿* ${PF}ytv
*│✿* ${PF}ytv-v2 _título o link_
*│╭─────────◌*
*╰╯*`
    break

    case 'menulogos':
    case 'logosmenu':
    case 'menulog':
      menuText = `*╭─ »* \`ᴍ ᴇ ɴ ᴜ - ʟ ᴏ ɢ ᴏ s\`  *ׁ  ♡ა*
*│✿* ${PF}1917style + _text_
*│✿* ${PF}advancedglow + _text_
*│✿* ${PF}blackpinklogo + _text_
*│✿* ${PF}blackpinkstyle + _text_
*│✿* ${PF}cartoonstyle + _text_
*│✿* ${PF}deletingtext + _text_
*│✿* ${PF}effectclouds + _text_
*│✿* ${PF}flag3dtext + _text_
*│✿* ${PF}flagtext + _text_
*│✿* ${PF}freecreate + _text_
*│✿* ${PF}galaxystyle + _text_
*│✿* ${PF}galaxywallpaper + _text_
*│✿* ${PF}glitchtext + _text_
*│✿* ${PF}glowingtext + _text_
*│✿* ${PF}gradienttext + _text_
*│✿* ${PF}lighteffects + _text_
*│✿* ${PF}logomaker + _text_
*│✿* ${PF}luxurygold + _text_
*│✿* ${PF}makingneon + _text_
*│✿* ${PF}neonglitch + _text_
*│✿* ${PF}papercutstyle + _text_
*│✿* ${PF}pixelglitch + _text_
*│✿* ${PF}royaltext + _text_
*│✿* ${PF}sandsummer + _text_
*│✿* ${PF}summerbeach + _text_
*│✿* ${PF}typographytext + _text_
*│✿* ${PF}underwatertext + _text_
*│✿* ${PF}watercolortext + _text_
*│✿* ${PF}writetext + _text_
*│╭─────────◌*
*╰╯*`
    break

    case 'menu18':
    case 'manu+18':
    case 'menunsfw':
      menuText = `








Deja la paja





`
     break 

    default:
      return
  }

  let menutext = `> 🍙 ׄ ⬭ !ʜᴏʟᴀ¡, ${name}

───────────────── 
⌕𓈒 ݇ܶ 𝐈 𝐍 𝐅 𝐎 / 𝐁 𝐎 𝐓 ᮫ ̮ೃ
─────────────────
*◦ 🌱 ᴜsᴜᴀʀɪᴏ ›* ${username}
*◦ 🌷 ᴇsᴛᴀᴅᴏ ›* ${isMain}
*◦ 🌾 ʀᴀᴍ ›* ${ram}
*◦ 🚩 ʟᴀᴛᴇɴᴄʏ ›* ${latency}
*◦ 🍃 ᴜᴘᴛɪᴍᴇ ›* ${uptimeText}
*◦ 🪷 ᴜsᴇʀs ›* ${totalUsers}
*◦ 🐾 ᴜsᴇʀs ›* ${totalCommands}
─────────────────

${menuText}`

  await conn.sendMessage(
    m.chat,
    {
      text: menutext,
      contextInfo: {
        mentionedJid: [userId],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: channelRD.id,
          serverMessageId: '',
          newsletterName: channelRD.name
        },
        externalAdReply: {
          title: botname,
          body: textbot,
          mediaType: 1,
          mediaUrl: redes,
          sourceUrl: redes,
          thumbnail: await (await fetch(banner)).buffer(),
          renderLargerThumbnail: true
        }
      }
    },
    { quoted: m }
  )
}

handler.help = ['menudescargas', 'menulogos']
handler.tags = ['menu']
handler.command = [
  'menudescargas', 'menudl', 'menudow',
  'menulogos', 'logosmenu', 'menulog',
  'menu18', 'menu+18', 'menunsfw'
]
handler.register = false
export default handler