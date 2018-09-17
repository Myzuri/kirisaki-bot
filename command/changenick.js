module.exports.run = async (Discord, client, args, message, nick) => {



    client.user.setUsername(nick) //.then(user => message.channel.sendMessage(`My new nickname is ${user.username}!`)).catch(console.error);
}
