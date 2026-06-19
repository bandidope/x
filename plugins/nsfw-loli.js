/* Pack By WillZek 
- Hecho Para Los Pajeros 
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) {
    return m.reply(`《✦》El contenido *NSFW* está desactivado en este grupo.\n> Un administrador puede activarlo con el comando » *#nsfw on*`);
    }
m.react('🕑');

const gp = global.db.data.chats[m.chat] || {};

if (!gp.nsfw && m.isGroup) return m.reply(hotw);

let txt = 'Pack🔥🔥🔥';

let img = 'https://delirius-apiofc.vercel.app/nsfw/girls';

m.react('✅');
// viva el porno jodido 
conn.sendMessage(m.chat, { 
        image: { url: img }, 
        caption: txt, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.pack`,
                buttonText: { displayText: 'Siguiente 🔁' }
            },
            {
                buttonId: '.vxxx',
                buttonText: { displayText: '🥵 Obtener Video' }
            },
            {
                buttonId: '.tetas',
                buttonText: { displayText: '😐 Tetas' }
            }
        ],
        viewOnce: false,
        headerType: 4
    }, { quoted: m });
}

handler.help = ['loli2'];
handler.tag = ['nsfw'];
handler.command = ['loli2'];

export default handler;