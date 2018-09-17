
module.exports.run = async (Discord, client, message, args) =>{

    if(message.author.id !== '446738422346809354') return;
    var test = client.guilds.filterArray(g=>g);
    var n = 0;
    while(n<test.length){

        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(test[n].name, 'ID | ' + test[n].id)
        .addField("Propriétaire", message.guild.owner, true)
        .setThumbnail(message.guild.iconURL)
        client.users.get('446738422346809354').send(embed)
        console.log(test[n].name)
        n++;
}
}