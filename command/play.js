module.exports.run = async (Discord, client, message, args, ytdl, streamOptions) => {

    var link = args[0];
    
    let valide_url = await ytdl.validateURL(link);
    if(!valide_url) return message.channel.send('Input a **VALID** url')
    
    let info = await ytdl.getInfo(link)
    message.member.voiceChannel.join()
  .then(connection => {
    console.log('play');
    const stream = ytdl(link, { filter : 'audioonly' });
    const dispatcher = connection.playStream(stream, streamOptions);
    
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username}`)
    .addField('Now playing', `\`${info.title}\``)
    return message.channel.send(embed)
  })
  .catch(console.error);
  
  }

    
