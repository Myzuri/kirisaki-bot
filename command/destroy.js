module.exports.run = async (Discord, client, message, args) => {

        resetBot(message.channel)

        function resetBot(channel) {
                // send channel a message that you're resetting bot [optional]
                channel.send('Shutting down, see ya')
                .then(msg => client.destroy())
            }

}
