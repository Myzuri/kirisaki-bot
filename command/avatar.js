
module.exports.run = async (Discord, client, message, args) => {

	let user = message.mentions.users.first();//get the first mention
	let search = args.join(' ');//search an user if no one is mention
	let tags = client.users.find(u => u.username === search);//find the user (work with username only)
	var author; // mention to get avatar
	
		if(user){//work if a mention is used
			var author = user;

			let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription(`${author.tag}'s avatar`)
			.setImage(user.displayAvatarURL)
			return message.channel.send(embed)

		} if (tags) {//work if a username is "search"
			var author = tags;

			let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription(`${author.tag}'s avatar`)
			.setImage(tags.displayAvatarURL)
			return message.channel.send(embed)
			
		} else {//show your own avatar (!avatar)
			var author = message.author;
			
			let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription("Your avatar")
			.setImage(author.displayAvatarURL)
			return message.channel.send(embed)
		} 

}
