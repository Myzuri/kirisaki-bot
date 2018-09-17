const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

   // if(!message.member.hasPermission('MANAGE_SERVER'));
    if(!args [0] || args[0 == 'help']) return; //message.reply('!prefix [prefix]');
    console.log('Rien')


    let prefixes = JSON.parse(fs.readFileSync('./modules/prefix.json', 'utf8'));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./modules/prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err);
    })

  
}