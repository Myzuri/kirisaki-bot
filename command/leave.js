module.exports.run = async (Discord, client, message, args, ytdl, streamOptions) => {

        if (!message.member.voiceChannel) return message.channel.send("You're not connected to vocal channel");

        if (!message.guild.me.voiceChannel) return message.channel.send("I'm not connected");

        if (message.guild.me.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send("You're not in the same channel ¯\_(ツ)_/¯");
       
        message.guild.me.voiceChannel.leave()
       
        message.channel.send("Je quitte le channel");

        console.log("leave");

}
