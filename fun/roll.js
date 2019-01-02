const Commando = require('discord.js-commando');

class CoinFlipCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a 6 sided dice'
        });
    }

    async run(message, args)
    {
        var diceroll = Math.floor(Math.random() * 6) + 1;
        message.reply("Your dice roll landed on " + diceroll);
    }
}

module.exports = CoinFlipCommand;
