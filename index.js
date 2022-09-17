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
    console.log('The bot is ready!')
})


const emoji = ':regional_indicator_k: :regional_indicator_e: :regional_indicator_r: :regional_indicator_s: :regional_indicator_t:'

setInterval(() => {
    client.on('messageCreate', (message) => {
        if (message.content.includes ('kerst')) {
    
            let year = new Date().getFullYear()
            let date = new Date(`12/25/${year}`)
    
            function addHours(numOfHours, now = new Date()) {
                now.setTime(now.getTime() + numOfHours * 60 * 60 * 1000);
              
                return now;
              }
    
            let nowResult = addHours(2)
    
            let difference = date.getTime() - nowResult.getTime()
            let totaldays = Math.ceil(difference / (1000 * 60 * 60 * 24))
    
    
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
}, 10000)


client.login(process.env.TOKEN)