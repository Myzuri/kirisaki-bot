module.exports.run = async (Discord, client, message, args) => {

        var content = args.join(' ');

        let userembed = new Discord.RichEmbed()

        .setColor('RANDOM')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(content);
        console.log(content)
        return message.channel.send(userembed)
}