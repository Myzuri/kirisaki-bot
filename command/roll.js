
module.exports.run = async (Discord, client, message, args) => {

    roll();

		if (randnum){
			message.reply("you got " + randnum + " !");
			console.log("dé1");
		}

}

function roll(min, max){
	min = Math.ceil(0);
	max = Math.floor(100);
	randnum = Math.floor(Math.random() * (max - min + 1) + min);
}
