const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume: 1};
const config = require('./modules/config.json')
const active = new Map();

var prefix = (config.prefix);

console.log('connexion.....')

client.on('ready', () => {
    client.on('ready', () => {
    setInterval(function() {
    let allgame = ['Raku wa baka desu', `My prefix ${config.prefix} | serving ${client.guilds.size} servers`, 'OwO']
    let gameon = allgame[Math.floor(Math.random()*allgame.length)]
    client.user.setGame(gameon, 'https://www.twitch.tv/monstercat');
}, 100000)
    console.log('connexion successful')
    console.log(`Logged as ${client.user.tag}`)//It's usefull when you have many bot bots and you don't know wich is getting online
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
   member.guild.channels.get('').send("Welcome <@" + member.id + ">"); 
});
//`${prefix}help for help`

client.on("guildMemberRemove", (member) => {
    //const defaultChannel = member.guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
    member.guild.channels.get('').send("Bye **" + member.user.username + '**');
});

client.login(process.env.TOKEN);

client.on('message', message => {
var msg = message.content.toLowerCase();
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


    if(message.author.bot) return
    if(message.content.indexOf(config.prefix) !== 0) return

    try {
        let commandFile = require(`./command/${command}.js`);
        commandFile.run(Discord, client, message, args, ytdl, streamOptions)
    } catch (err) {
        return 
    }

})
