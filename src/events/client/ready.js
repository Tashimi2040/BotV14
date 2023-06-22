const chalk = require('chalk')
const Event = require('../../structures/Event')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }

    run = async () => {
        
        console.log(chalk.green(`[ENVIANDO] Registrado ${this.client.cmds.length} comandos`))
        this.client.registryCommands()
    }
}