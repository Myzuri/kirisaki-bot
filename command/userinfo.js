const Discord = require('discord.js')

module.exports.run = async (client, args, message) => {

      let user = message.mentions.users.first() || message.author;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle("Here the account info's " + `${user.username}`)
      .setThumbnail(user.displayAvatarURL)
      .addField("State", user.presence.status, true)
      .addField("ID", user.id, true)
      .setDescription('[full image]('+user.avatarURL+')')
      .setFooter("account created at ")
      .setTimestamp(user.createdAt)
      return message.channel.send(embed)

  
}


