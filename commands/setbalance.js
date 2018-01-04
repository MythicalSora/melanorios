const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const sql = require('sqlite');
exports.run = async (client, message, args) => {
let user = message.mentions.members.first() || message.author;   
let modRole = message.guild.roles.find("name", "Staff");

    if(!message.member.roles.has(modRole.id)) {
        message.reply("You don't have perms, scrub").catch(console.error);

    }
else {
    if (args[0] == user) {
    const amount = args[1];
    console.log(amount);
    if (!amount) return message.channel.send({embed: {color: 3453454, description: 'You must enter an amount of money.'}});
    sql.run(`UPDATE economy SET balance = ${parseInt(amount)} WHERE guildid = ${message.guild.id} AND userid = ${user.id}`);
     return message.channel.send({embed: {color: 433243, description: `I have set users balance to $${amount}.`}});
 } else if (!args[0]) {
     return message.channel.send({embed: {color: 545453, description: 'No arguments: `user`'}});
 }

}

}
