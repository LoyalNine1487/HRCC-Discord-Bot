module.exports = {
    name: 'code',
    description: `Where's the bot's source code?`,
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        message.reply(`The bot's source code is here: https://github.com/LoyalNine1487/HRCC-Discord-Bot `);
    },
};