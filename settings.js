import { watchFile, unwatchFile } from "fs"
import { fileURLToPath } from "url"
import fs from "fs"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = "" //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = ["51936994155", "51904937048"]
global.suittag = ["51936994155"] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2|Latest"
global.sessions = "Principal"
global.jadi = "SubBot"
global.yuzukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botname = " ۫  ⚡੭  ׅ  𝑷𝒓𝒊𝒎𝒆 𝑺𝒖𝒑𝒓𝒆𝒎𝒐 - 𝐀𝐈 ׁ ♡ ⸼"
global.textbot = "₊𝗧𝗲𝗮𝗺 𝗡𝗶𝗴𝗵𝘁𝘄𝗶𝘀𝗵˙ꨂﾟ"
global.dev = " ׅ   ⿆  𝃤𝃤𓂂 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗪𝗵𝗼𝗶𝘀 彡★"
global.author = "© 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗪𝗵𝗼𝗶𝘀 ⚡"
global.etiqueta = "✫ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗪𝗵𝗼𝗶𝘀 ٩(◕‿◕｡)۶"
global.currency = "¥enes"
global.banner = "https://raw.githubusercontent.com/bandidope/Fotos/refs/heads/master/fotos/prime.jpg"
global.icono = "https://raw.githubusercontent.com/bandidope/Fotos/refs/heads/master/fotos/prime.jpg"
global.catalogo = fs.readFileSync('./lib/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = "https://chat.whatsapp.com"
global.community = "https://chat.whatsapp.com/"
global.channel = "https://whatsapp.com/channel/"
global.github = "https://github.com/"
global.gmail = "yallico2024@gmail.com"
global.ch = {
ch1: "120363419947391620@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
xyro: { url: "https://api.xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null },
adonix: { url: "https://api-adonix.ultraplus.click", key: 'shadow.xyz' }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings.js'"))
import(`${file}?update=${Date.now()}`)
})
