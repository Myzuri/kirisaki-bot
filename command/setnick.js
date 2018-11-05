module.exports.run = async (Discord, client, message, args) => {

	let memb = message.mentions.users.first();
	let newnick = args.join(' ');
	if(memb){
		try{
		message.member(memb).setNickname(newtag).then(() => message.channel.send(`Set the new username with success (${newnick})`));
	} catch (err) {
		return message.channel.send('Fail during the change')
	}
	}




}