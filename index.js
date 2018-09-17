const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume: 1};
const config = require('./modules/config.json')
const ownerID = "446738422346809354";
const active = new Map();

var prefix = (config.prefix);

console.log('connexion.....')

client.on('ready', () => {
    client.user.setPresence({ game : { name : `${client.guilds.size} servers`, url : 'https://www.twitch.tv/monstercat'}});
    //client.user.setPresence({ game : { name : 'Access denied', url : 'https://www.twitch.tv/monstercat'}})
    console.log('connexion terminée')
});

client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
  });
  
  client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
  });

client.on('guildMemberAdd', member => {
   // const defaultChannel = member.guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
   member.guild.channels.get('489432171547852800').send("Welcome <@" + member.id + ">"); 
});
//`${prefix}help for help`

client.on("guildMemberRemove", (member) => {
    //const defaultChannel = member.guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
    member.guild.channels.get('489432171547852800').send("Bye **" + member.user.username + '**');
});

client.login(config.token);

client.on('message', message => {
var msg = message.content.toLowerCase();
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const username = message.author.username;


let ops = {
    ownerID: ownerID,
    active: active
}


    if(message.author.bot) return
    if(message.content.indexOf(config.prefix) !== 0) return

    try {
        let commandFile = require(`./command/${command}.js`);
        commandFile.run(Discord, client, message, args, ytdl, streamOptions, ops, username)
    } catch (err) {
        return 
    }

})