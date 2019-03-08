module.exports = {
    name: 'help',
    description: 'Help Me!',
    execute(message, args) {
        const config = require('../config');
       console.log("Help");
        message.channel.send({embed: {
            color: 3447003,
            title: 'Help',
            description: 'So you want help hu?',
            fields: [
                {
                    name: 'Well...',
                    value: `Nothing ATM`
                }
            ],
            timestamp: new Date(),
            footer: {
            text: 'Hello World'
            }
        }}).catch(console.error());
    },
};