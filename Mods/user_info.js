const commando = require('discord.js-commando');
const discord = require('discord.js');

class UserInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'userinfo',
            group: 'mods',
            memberName: 'userinfo',
            description:'shows information on a user'
        });
    }

    async run(message, args)
    {

        let mem = message.mentions.members.first() || message.member;
        var usrEmbed = new discord.RichEmbed()
        .setColor(0x0000FF)
        .setTitle("User Information")
        .addField("Username:", mem)
        .addField("User Id:", mem.id)
        .addField("Joined On:", mem.joinedAt)
        .addField('Status:', mem.presence.status, true)

    message.channel.send(usrEmbed);
    message.delete();
    }
}

module.exports = UserInfoCommand;
