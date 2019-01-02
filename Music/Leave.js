const Commando = require('discord.js-commando');

class LeaveChannelCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'leaves the voice channel of the commander'
        });
    }

    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.reply("i need to be in a voice channel to do that")
        }
    }
}

module.exports = LeaveChannelCommand;
