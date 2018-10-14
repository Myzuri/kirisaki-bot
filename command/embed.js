module.exports.run = async (Discord, client, message, args) => {

        var content = args.join(' ');//need to catch the args that the bot will send

        let userembed = new Discord.RichEmbed()

        .setColor('RANDOM')//a random color | you can use the HEX color if random isn't at your taste
        .setAuthor(message.author.username, message.author.avatarURL)//show msg author username and avatar 
        .setDescription(content);//add a description with the content used before
        console.log(content)//let you see the content of the msg without being in the server 
        return message.channel.send(userembed)//finally just send your embed
}
