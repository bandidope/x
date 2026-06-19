import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

global.botNumber = "" 
global.owner = ["51936994155", "51934053286", "51978385249", "51972409783", "51966453839", "5213541145561"]
global.suittag = ["51936994155"] 
global.prems = []


global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2 • Latest"
global.nameqr = "ɢᴏᴊᴏ-ʙᴏᴛ ᴍᴅ"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.kanekiAIJadibts = true


global.botname = "𖹭  ׄ  ְ 🍜 Prime Bot ✩"
global.textbot = "Prime Bot • Whois Yallico"
global.dev = "© Team Nightwish"
global.author = "© Prime Pro"
global.etiqueta = "@whois.yallico ❄️ ⊹꙰ "
global.currency = "g᥆𝗍іᥴᥲs"
global.banner = "https://raw.githubusercontent.com/bandidope/Fotos/refs/heads/master/fotos/prime.jpg"
global.icono = "https://raw.githubusercontent.com/bandidope/Fotos/refs/heads/master/fotos/prime.jpg"
global.catalogo = fs.readFileSync('./lib/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = "https://chat.whatsapp.com/LjPhgjqCM934QEzYz3vrVk"
global.community = "https://chat.whatsapp.com/LjPhgjqCM934QEzYz3vrVk"
global.channel = "https://whatsapp.com/channel/0029VbBGlokA89MliWWv1x16"
global.github = "https://chat.whatsapp.com/LjPhgjqCM934QEzYz3vrVk"
global.gmail = "yallico2024@gmail.com"
global.ch = {
ch1: "120363419947391620@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
xyro: { url: "https://xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null },
adonix: { url: "https://api-adonix.ultraplus.click", key: 'shadow.xyz' },
stellar: { url: "https://api.stellarwa.xyz", key: "this-xyz"},
light: { url: "https://api--shadowcorexyz.replit.app", key: null } // soy pobre att: El creador alv
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings'"))
import(`${file}?update=${Date.now()}`)
})
