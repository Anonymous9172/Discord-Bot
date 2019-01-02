const commando = require('discord.js-commando');
const discord = require('discord.js');

class WarnCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'warn',
            group: 'mods',
            memberName: 'warn',
            description:'DMs a user with a warning message.'
        });
    }

    async run(message, args)
    {
        if(message.member.roles.find("name", "Founder")){
        let mentioned = message.mentions.users.first();
        let reason = args.slice(22) 
        var i = 0;
        var text = "Roll ";
        var warningEmbed = new discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(`You've been warned in ${message.guild.name}`)
        .setColor('#FFCC00')
        .setThumbnail(message.author.avatarURL)
        .setURL("")
        .setFooter("Created by Leon J.#9172")
        .addField('Warned by:', message.author.tag)
        .addField('Reason:', reason)

    message.guild.channels.find(channel => channel.name === "logs").send(warningEmbed);
    message.delete();
    }
}
}
module.exports = WarnCommand;
