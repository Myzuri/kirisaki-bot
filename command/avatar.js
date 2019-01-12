

module.exports.run = async (Discord, client, message, args) => {

	let avuser = message.author;
	let user = message.mentions.users.first();
	let search = args.join(' ');
	let tags = client.users.find(u => u.username === search);
	var author; // mention to get avatar, or type username
	
		if(user){
			var author = user;

			let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription("Avatar de " + `${author.username}`)
			.setImage(`${user.displayAvatarURL}?size=1024`)
			return message.channel.send(embed).then(() => console.log(`${avuser.tag} used avatar on ${author.tag}`))

		} if (tags) {
			var author = tags;

			let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription("Avatar de " + `${author.username}`)
			.setImage(`${tags.displayAvatarURL}?size=1024`)
			return message.channel.send(embed).then(() => console.log(`${avuser.tag} used avatar on ${author.tag}`))
		} else {
			var author = message.author;
			let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription("Votre avatar")
			.setImage(`${author.displayAvatarURL}?size=1024`)
			return message.channel.send(embed).then(() => console.log(`${message.author.tag} used avatar`))
		
		} 
		
		

}
