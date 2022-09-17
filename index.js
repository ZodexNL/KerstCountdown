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
    if (message.content === 'kerst') {

        const date = new Date('12/25/2022')
        let now = new Date()

        let difference = date.getTime() - now.getTime()

        let totaldays = Math.ceil(difference / (1000 * 60 * 60 * 24))

        console.log(totaldays)
        // let now = Date(now)
        // let strNow = now.toString()

        // let diffTime = Math.abs(now - date)
        // let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        // let timeElapsed = Date.now()
        // let today = new Date(timeElapsed)
        // let ding = today.toLocaleDateString()

        // console.log(ding)

        message.reply({
            content: '${totaldays}',
        })
    }
})

client.login(process.env.TOKEN)