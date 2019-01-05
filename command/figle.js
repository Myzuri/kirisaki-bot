const figlet = require('figlet');
module.exports.run = async (Discord, client, message, args) => {

        let text = args.join(' ');


        if (!text) return message.channel.send("```!ascii [text]\n ---------------------\n let you transform a short text into ascii```");
        figlet(text, function(err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                message.channel.sendCode("ascii", data)
            });
        };
