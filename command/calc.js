
module.exports.run = async (Discord, client, message, args, math) => {

	let calcul = args.join(' ');
try{
	let mathc = math.eval(calcul);
	message.channel.send(mathc)
} catch (error) {
	message.channel.send("It won't work")
	console.log(error);
}

}
