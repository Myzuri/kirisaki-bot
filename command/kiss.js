const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {

    let Hugser = message.mentions.users.first();

    let hugger = message.author;

    let emote = client.emojis.get('534470532637130763')

    if(!Hugser) return message.channel.send('Trying to kiss what '+emote)

    if(Hugser === message.author) return message.channel.send('Lemme laugh to see you kiss yourself ')

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    let embed = new Discord.RichEmbed()
    .setDescription(`**${hugger.username}** gives a kiss to **${Hugser.username}**, how cute they are !`)
    .setImage(body.url)
    message.channel.send(embed)
}
