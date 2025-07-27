

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
      *BLOOD MENU LIST *  *${pushname}*
      
       *BLOOD XMD Command List*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

  
  ┃1│📥 Download Menu
  ┃2│👥 Group Menu
  ┃3│😄 Fun Menu
  ┃4│🗣 Owner Menu
  ┃4│🤖 Dual Menu
  ┃5│🎎 Anime Menu
  ┃6│🔄 Convert Menu
  ┃7│📌 Other Menu
  ┃8│💞 Reactions Menu
  ┃9│ 🏠 Main Menu


> 🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐔𝐋𝐀_𝐌𝐃 😈


🥶𝐌𝐚𝐝𝐞 𝐛𝐲 BLOOD XMD V1.0

> BLOOD XMD 
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/38h6qg.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
