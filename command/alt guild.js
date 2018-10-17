//it's the as the guild commande but if you don't like how the other command look you can use this instead
module.exports.run = async (Discord, client, message, args) =>{

    if(message.author.id !== '378879176515780619') return;
    var test = client.guilds.map(g => `${g.name} ID | ${g.id}`).join(', ');

        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('List of server', `${test}`)
        message.channel.send(embed)

}
