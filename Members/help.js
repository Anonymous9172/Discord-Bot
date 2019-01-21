const Discord = require('discord.js');
const commando = require('discord.js-commando');

class HelpCommand extends commando.Command
{
  constructor(client)
    {
        super(client,{
            name: 'help',
            group: 'mods',
            memberName: 'help',
            description: 'Get all the useful commands of our bot!'
        });
    }
  
  async run(message, args)
  {
    
    let mem = message.mentions.members.first() || message.member;
    
    var help = new Discord.RichEmbed()
    .setColor('PINK')
    .setTitle('**Bot Commands**')
    .setDescription('A list of all the bot commands!')
  //.addField('Music Commands »', '`play`, `pause`, `search`, `join`, `leave`')//coming soon
    .addField('Fun Commands »', '`8ball`, `flip`')
    .addField('Member Commands »', '`report`, `suggestion`')
    .addField('Ticket Commands »', '`close`, `force_close`, `ticket`')
    
  message.delete();
    message.author.send(help);
       message.channel.send("**»** Hey, " + mem + " we sent you a list of all the bot commands📬!")
 
    var staffEmbed = new Discord.RichEmbed()
    .setColor('#f442c2')
    .setTitle('**Bot Commands**')
    .setDescription('A seperate list of the mod commands!')
    .addField('``` ```', '** **')
    .addField('Mods Commands »', '`ban`', '`kick`', '`mute`', '`promote`', '`prune`', '`userinfo`', '`warn`', '`suggestion`' )
   
    if(message.member.hasPermission('ADMINISTRATOR'))  
    {
    message.delete();
      message.author.send(staffEmbed);
      message.channel.send('**»** Hey, ' + mem + 'we sent you a list of the mod commands📬!')
    }
      }
}            
module.exports = HelpCommand;
