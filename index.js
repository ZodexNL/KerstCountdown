const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})


client.on('ready', () => {
    console.log('The bot is ready')
})

const words = ["kerst"] 



client.on('messageCreate', (message) => {
    if (message.content.includes ('kerst')) {


        for (var i = 0; i < words.length; i++) {
            if (message.content.includes(words[i])) {
                message.reply('ja')
              break;
            }
          }

        // const date = new Date('12/25/2022')
        // const date2 = new Date('12/27/2022')
        
        // let now = new Date()

        // let difference = date.getTime() - date2.getTime()

        // let totaldays = Math.ceil(difference / (1000 * 60 * 60 * 24))

        // console.log(totaldays)


        // switch (true){
        //     case totaldays == 0:
        //         message.reply(`Het is vandaag kerst! Fijne dagen toegewenst`)
        //         break;

        //     case totaldays == 1:
        //         message.reply(`Morgen is het kerst! Heb je alles in huis?`)
        //         break;

        //     case totaldays > 1:
        //         message.reply(`Over ${totaldays} dagen is het kerst!`)
        //         break;
        //     case totaldays == -1:
        //         message.reply(`Het is vandaag 2e kerstdag! Weer gourmetten zeker?`)
        //         break;
        //     case totaldays ==-2:
        //         message.reply(`Restjes eten en uitbuiken....`)
        //         break;
        // }


        // const date = new Date('12/25/2022')
        // let now = new Date()

        // let difference = date.getTime() - now.getTime()

        // let totaldays = Math.ceil(difference / (1000 * 60 * 60 * 24))

        // console.log(totaldays)

        // message.reply(`Over ${totaldays} dagen is het kerst!`)
    }
})

client.login(process.env.TOKEN)