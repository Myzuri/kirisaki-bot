//it's the as the guild commande but if you don't like how the other command look you can use this instead
module.exports.run = async (Discord, client, message, args) =>{

    if(message.author.id !== '378879176515780619') return;
    var list = client.guilds.map(g => `${g.name} ID | ${g.id}`).join(', ');//.map is very usefull you can use it to array guilds
                                                                           //channels and users, etc...
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')//you can change it with HEX color code (#45eded look great) here a link to help you 
                           //https://www.w3schools.com/colors/colors_picker.asp
        .addField('List of server', `${list}`)//in the .map() the guilds names, ID and sentence have been already define so just need to 
        message.channel.send(embed)//call the {list} var

}
