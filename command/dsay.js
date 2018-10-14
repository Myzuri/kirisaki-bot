module.exports.run = async (Discord, client, message, args) =>  {

	var say = args.join(' ')//catch msg arguments 

	if(!say [0] || say[0 == 'help']) return message.channel.send("```!dsay [content] \n cannot be empty | don't even try !dsay [!dsay]```")
	//security if msg length is empty or contain help
		message.delete(1000)//delete your msg 
		return message.channel.send(say)//bot send your msg
	
}
