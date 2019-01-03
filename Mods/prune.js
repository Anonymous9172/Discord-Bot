const Commando = require('discord.js-commando');

class PruneCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'prune',
            group: 'mods',
            memberName: 'prune',
            description: 'Prunes messages.'
        });
    }

    async run(message, args)
    {
        message.channel.bulkDelete(args)
    }
}

module.exports = PruneCommand;
