/*EXEMPLO DE COMANDO: esse e o de ping obvio mas serve como uma base*/


const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping', //Nome do comando
            description: 'Mostra o ping do bot.' //descrição
        })
    }

    run = (interaction) => {
        /*Aqui vai o comando....*/
        interaction.reply({
            content: `O ping do bot é \`${this.client.ws.ping}\`ms.`,
        })
    }
}
