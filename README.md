<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/whoisdon/CommunityStructure?color=%2304D361">
	
  <img alt="Repository issues" src="https://img.shields.io/github/languages/top/whoisdon/CommunityStructure">
</p>
<h1 align="center">Tashimi/base</h1>
<p align="center">

 <img src="https://github.com/Tashimi2040/BotV14/assets/132114580/997a1876-1fb3-43f3-9975-b6a7b3990c83.jpg" width="400"/>

</p>
 

 <h2>O por que estou fazendo isso?</h2>
<p> Ja vim sofrendo bastante com problemas que me deixava triste como encontrar bases dificieis e que vinha cheio de coisa embutida deixando impossivel eu progredir, logo tive a brilhante ideia de me aprofundar e fazer essa base para vocês conseguirem prosseguir normalmente.</p>

<h2>Como instalar as depedencias?</h2>

<p>npm i</p>

<h2><img align="near" src="https://cdn.discordapp.com/emojis/999075964254425188.webp?size=96&quality=lossless" width="30px"/> Começo</h2>
<p align="center">para dar inicio e presciso que crie o arquivo <a href="https://github.com/Tashimi2040/BotV14/blob/main/.envexample">.env</a></p>
<p align="center"> <img src="https://github.com/Tashimi2040/BotV14/assets/132114580/6857126e-8716-427c-8f16-cbe616a89a3a"/> </p>


<h2><img align="near" src="https://cdn.discordapp.com/emojis/990307703668752435.webp?size=96&quality=lossless" width="32px" /> Base de comando</h2>

```js
const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'teste',//Nome do comando
            description: 'Exemplo.'//Nome da descrição
        })
    }

    run = (interaction) => {
	    //oque o bot ira fazer.
        interaction.reply({
            content: 'Oi'
        })
    }
}
```
 

<h3><img align="center" src="https://cdn.discordapp.com/emojis/806694071627546725.webp?size=96&quality=lossless" width="32px"> Criador</h3> 


 [<img src="https://github.com/Tashimi2040/BotV14/assets/132114580/32c2457c-2c23-48bc-9d90-bab8d9156086?size=115" width=115><br>Creator<br><sub>@tashimi2040</sub>](https://github.com/Tashimi2040) 
 :---:

