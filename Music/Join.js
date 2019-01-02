const Commando = require('discord.js-commando');

class JoinChannelCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'joins the voice channel of the commander'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                .then(connection =>{
                    message.reply("Successfully Joined!")
                })
            }
        }
        else{
            message.reply("you must be in a voice channel for the bot to be summoned into")
        }
    }
}

module.exports = JoinChannelCommand;
