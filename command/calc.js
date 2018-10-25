const math = require('mathjs')
module.exports.run = async (Discord, client, message, args) => {

	let calcul = args.join(' ');
try{
	let mathc = math.eval(calcul);

	let embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag, message.author.avatarURL)
	.setTitle('I\'m enough smart to know the result UwU')
	.addField('Input', `\`\`\`${calcul}\`\`\``)
	.addField('Output', `\`\`\`${mathc}\`\`\``)
	message.channel.send(embed)
} catch (error) {
	message.channel.send("It won't work")
}

}
