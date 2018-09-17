module.exports.run = async (client, message, args) => {
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    // the path is relative to the *current folder*, so just ./filename.js
    try{
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e){
        channel.send('Unable to reload');
    }   
    message.reply(`The command ${args[0]} has been reloaded`);
  };