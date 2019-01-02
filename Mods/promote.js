const commando = require('discord.js-commando');
const discord = require('discord.js');

class UserInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'promote',
            group: 'mods',
            memberName: 'promote',
            description:'Suggests a user for a promotion'
        });
    }

    async run(message, args)
    {

        let mem = message.mentions.members.first() || message.member;
        let auth = message.member;
        var promoEmbed = new discord.RichEmbed()
        .setColor(0xF0F0F0)
        .setTitle("User Promotion")
        .addField("Username:", mem)
        .addField("User Id:", mem.id)
        .addField("Joined On:", mem.joinedAt)
        .addField('Status:', mem.presence.status, true)
        .addField("Message Author:", auth)

    message.channel.send(promoEmbed);
    message.guild.members.get("YOUR_USER_ID_HERE").send(promoEmbed);
    message.delete();
    }
}

module.exports = UserInfoCommand;
