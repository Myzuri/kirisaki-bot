module.exports.run = async (Discord, client, message, args) =>  {

  if(!message.member.hasPermissions('MANAGE_MESSAGES')) return message.channel.sendMessage("You don't have enough perms")


	if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

			// Logging the number of messages deleted on both the channel and console.
			var embed = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			.addField('Message delete !', 'Amount of deleted messages: `' +messagesDeleted+'`')
			.setThumbnail(message.author.displayAvatarURL)
			message.channel.sendMessage(embed);
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
});
}
}
