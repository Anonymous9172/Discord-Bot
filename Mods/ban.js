const Commando = require('discord.js-commando');

class BanCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ban',
            group: 'mods',
            memberName: 'ban',
            description: 'Bans the mentioned user.'
        });
    }

    async run(message, args)
    {
        let bannedUser = message.guild.member(message.mentions.users.first());
        if(!bannedUser)
        {
            message.channel.send("sorry, i couldn't find that user");
            return;
        }
        if(!message.member.hasPermission("BAN_MEMBERS"))
        {
            message.channel.send("You don't have the permissions for that");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(bannedUser).ban(reason)
            .then(console.log)
            .catch(console.error);
    }
}

module.exports = BanCommand;
