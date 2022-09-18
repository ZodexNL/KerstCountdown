const { Client, GatewayIntentBits } = require('discord.js')
const { readdirSync } = require('fs')
const{ join } = require('path')

const Discord = require('discord.js')
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
const emoji = ':regional_indicator_k: :regional_indicator_e: :regional_indicator_r: :regional_indicator_s: :regional_indicator_t:'
const commandTriggers = ['kerst']

require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.commands = new Discord.Collection()

for (const file of commandFiles) {
    const  command = require(join(__dirname, "commands", `${file}`))
    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log('The bot is ready!')
})

client.on('messageCreate', (message) => {
    if (message.author.bot){
        return
    }

    let split = message.content.split(' ')

    for (i =0; i < split.length; i++){
        msgLower = split[i].toLocaleLowerCase()
        console.log(msgLower)
        
        if(commandTriggers[0] == msgLower){
             msgContent = msgLower
             runCommand(msgContent)
            break
        }else{
            msgContent = split[i]
            console.log(msgContent)
             continue
        }
    }

    function runCommand(msgContent){
        client.commands.get(msgContent).run(message, emoji)
    }

})

client.login(process.env.TOKEN)