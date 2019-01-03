const commando = require('discord.js-commando');

class eightballCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'simple',
            memberName: '8ball',
            description: 'insert a question and it returns a answer, every time the answer will be randomly chosen!',
        }); 
    }

    async run(message, args) {
        var answers = [
            'Yes', 'No', 'I dont know','Maybe yes', 'Maybe no'
        ];
        var answer = answers[Math.floor(Math.random() * 5)];
        message.channel.send(answer.toString())
    }
}
module.exports = eightballCommands

//this fil was coded by:
//     Discord
//Name:YHK_YT
