const Discord = require('discord.js');//I prefer to prevent bug so i let it here
module.exports.run = async (Discord, client, message, args) => {

        let feed = args.join(' ');
        let devchannel = client.channels.get('502087722085777418');//with that variable i don't need to call this function anymore
        
        
        if(feed.length <= 4 ){//if the feedback contain 3 word or less it won't send the feedback
                return message.channel.send('Please don\'t send useless feedback')
        } else {
        
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField('Feedback received !', `${feed}`)
        .addField('Server', `${message.guild.name} ID | \`${message.guild.id}\``)
        .addField('Channel', `${message.channel.name} ID | \`${message.channel.id}\``)
        .setThumbnail(message.guild.iconURL)//not necessary but funny to saw the icon of the guild
        .setTimestamp()//Show when it was send
        .setFooter("user ID | " + message.author.id)
        return devchannel.send(embed)

        }    
};
