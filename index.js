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
        
client.on('messageCreate', (message) => {
    if (message.content.includes ('kerst')) {

        const date = new Date('12/25/2022')
        let now = new Date()

        let difference = date.getTime() - now.getTime()
        let totaldays = Math.ceil(difference / (1000 * 60 * 60 * 24))

        console.log(totaldays)

        switch (true){
            case totaldays == 0:
                message.reply(`Het is vandaag :regional_indicator_k: :regional_indicator_e: :regional_indicator_r: :regional_indicator_s: :regional_indicator_t:! Fijne dagen toegewenst`)
                break;

            case totaldays == 1:
                message.reply(`Morgen is het :regional_indicator_k: :regional_indicator_e: :regional_indicator_r: :regional_indicator_s: :regional_indicator_t:! Heb je alles in huis?`)
                break;

            case totaldays > 1:
                message.reply(`Over ${totaldays} dagen is het :regional_indicator_k: :regional_indicator_e: :regional_indicator_r: :regional_indicator_s: :regional_indicator_t:!`)
                break;
            case totaldays == -1:
                message.reply(`Het is vandaag 2e :regional_indicator_k: :regional_indicator_e: :regional_indicator_r: :regional_indicator_s: :regional_indicator_t: dag! Weer gourmetten zeker?`)
                break;
            case totaldays == -2:
                message.reply(`Restjes eten en uitbuiken....`)
                break;
        }
    }
})

client.login(process.env.TOKEN)