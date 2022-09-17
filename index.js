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


const emoji = ':regional_indicator_k: :regional_indicator_e: :regional_indicator_r: :regional_indicator_s: :regional_indicator_t:'
        
client.on('messageCreate', (message) => {
    if (message.content.includes ('kerst')) {

        let year = new Date().getFullYear()
        let date = new Date(`12/25/${year}`)

        let now = new Date()

        let difference = date.getTime() - now.getTime()
        let totaldays = Math.ceil(difference / (1000 * 60 * 60 * 24))

        console.log(totaldays)

        switch (true){
            case totaldays == 0:
                message.reply(`Het is vandaag ${emoji}! Fijne dagen toegewenst`)
                break;

            case totaldays == 1:
                message.reply(`Het is ${emoji} avond!`)
                break;

            case totaldays > 1:
                message.reply(`Over ${totaldays} dagen is het ${emoji}!`)
                break;
            case totaldays == -1:
                message.reply(`Het is vandaag 2e ${emoji} dag! Weer gourmetten zeker?`)
                break;
            case totaldays == -2:
                message.reply(`Restjes eten en uitbuiken....`)
                break;
        }
    }
})

client.login(process.env.TOKEN)