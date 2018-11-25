module.exports.run = async (Discord, client, message, args) => {

        if(!message.author.id === '498479906439823370'){
        
        resetBot(message.channel)

        function resetBot(channel) {
                // send channel a message that you're resetting bot [optional]
                channel.send('Shutting down, see ya')
                .then(msg => client.destroy())
            }

}
}
