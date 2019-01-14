
module.exports.run = async (Discord, client, message, args) =>{

    if(message.author.id !== '498479906439823370') return;
    var test = client.guilds.filterArray(g=>g);
    var n = 0;
    while(n<test.length){

        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(test[n].name, 'ID | ' + test[n].id)
        .addField("Propriétaire", test[n].guild.owner, true)
        .setThumbnail(message.guild.iconURL)
        client.users.get('498479906439823370').send(embed)
        console.log(test[n].name)
        n++;
}
}
//I'm working on an other option, it will be var test = client.guilds.map(g => g.name).join(', ') 
// Actually it work with the eval command so you can already use it right now
