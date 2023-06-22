const { Client } = require('discord.js')
const { readdirSync } = require('fs')
const { join } = require('path')

module.exports = class extends Client {
    constructor(options) {
        super(options)

        this.cmds = []
        this.loadCommands()
        this.loadEvents()
    }
    
    registryCommands(){
        this.application.commands.set(this.cmds)
    }

    loadCommands(path = 'src/commands') {
        const categories = readdirSync(path)

        for (const category of categories) {
            const cmds = readdirSync(`${path}/${category}`)

            for (const command of cmds) {
                const commandClass = require(join(process.cwd(), `${path}/${category}/${command}`))
                const cmd = new (commandClass)(this)

                this.cmds.push(cmd)
            }
        }
    }

    loadEvents(path = 'src/events') {
        const categories = readdirSync(path)

        for (const category of categories) {
            const events = readdirSync(`${path}/${category}`)

            for (const event of events) {
                const eventClass = require(join(process.cwd(), `${path}/${category}/${event}`))
                const evt = new (eventClass)(this)

                this.on(evt.name, evt.run)
            }
        }
    }
}