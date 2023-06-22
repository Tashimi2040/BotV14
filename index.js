require('dotenv').config()
const {GatewayIntentBits} = require('discord.js')

const Client = require('./src/structures/Client')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds , 
        GatewayIntentBits.GuildMembers
    ]
        
})

client.login(process.env.TOKEN)