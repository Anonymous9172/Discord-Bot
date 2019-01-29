const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class SuggestionCommand extends Commando.Command 
  {
    constructor(client)
      {
        super(client,{
          name: 'suggestion',
          group: 'members',
          memberName: 'suggestion',
          description: 'suggest your sugestions for the bot here. / Per server only. not fully finished',
          //userPermissions: ['KICK_MEMBERS']
    
       });      
      }
  async run(message, args)
      {
         let mem = message.mentions.members.first() || message.member; 
        
       let words = args.split(' '); 
     let reason = words.slice(0).join(" ");
        
        var suggestionEmbed = new Discord.RichEmbed()
        .setColor('#2df922')
        .setThumbnail(message.author.avatarURL)
        .setTitle(`Suggestion`)
        .addField('Suggestion Created By:', '___ ___' + message.author)
        .addField('Suggestion:', reason) 
        //.setTimestamp()
        .setFooter(`Sent by ${message.author.username}.`)

        let incidentschannel = message.guild.channels.find(`name`, "suggestions");
        
    if (!incidentschannel) return message.reply("Couldn't find channel `#suggestion` !")
    if(message.members)
        message.delete()
    incidentschannel.send(suggestionEmbed)
    message.author.send(`${message.author} Your suggestion has been filed! :mailbox_with_mail:`)
        message.delete()
  }
}

    module.exports =  SuggestionCommand;        
