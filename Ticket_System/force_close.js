const commando = require("discord.js-commando");
const discord = require("discord.js")

class ForceCloseTicketCommand extends commando.Command
{
  constructor(client)
   {
     super(client,{
      name: "fclose",
      group: "ticket_system",
      memberName: "fclose",
      description: "Force closes your ticket"
   });
  
}


async run(message, args)
{           //PERMS V
    if (message.member.hasPermission("MANAGE_MESSAGES"))
    {
        (message.channel.delete())
    }
    else (message.channel.send("You do not have the right permission for that!"))
}
}
module.exports = ForceCloseTicketCommand;
