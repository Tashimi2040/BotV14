const Event = require('../../structures/Event')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'interactionCreate'
        })
    }

    run = async (interaction) => {
        if (interaction.isChatInputCommand()) {
            const cmd = this.client.cmds.find(c => c.name === interaction.commandName)

            cmd.run(interaction)
            
            
        }
    }
}
