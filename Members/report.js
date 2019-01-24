const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class SuggestionCommand extends Commando.Command 
  {
    constructor(client)
      {
        super(client,{
          name: 'report',
          group: 'members',
          memberName: 'report',
          description: 'Report a member or bug.',
          //userPermissions: ['KICK_MEMBERS']
    
       });      
      }
  async run(message, args)
      {
         let mem = message.mentions.members.first() || message.member; 
        
       let words = args.split(' ');  
     let reason = words.slice(0).join(" ");
        
        var suggestionEmbed = new Discord.RichEmbed()
       .setColor('#2327ff')
        .setThumbnail(message.author.avatarURL)
        .setTitle(`Report`)
        .addField('Reported By:', '___ ___' + message.author)
        .addField('Report:', reason) 
        //.setTimestamp()
        .setFooter(`Sent by ${message.author.username}.`)

        let incidentschannel = message.guild.channels.find(`name`, "suggestions");
        
    if (!incidentschannel) return message.reply("Couldn't find channel `#suggestion` !");
        
        message.delete()
    incidentschannel.send(suggestionEmbed)
    message.author.send(`${message.author} Your suggestion has been filed! :mailbox_with_mail:`)
      }
  }
    module.exports =  SuggestionCommand;        
