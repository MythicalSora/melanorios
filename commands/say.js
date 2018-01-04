const moment = require('moment');
const time = moment().format('MMM Do h:mma');
exports.run = async (client, message, args) => {
    let modRole = message.guild.roles.find("name", "Staff");

    if(!message.member.roles.has(modRole.id)) {
        message.reply("You don't have perms, scrub").catch(console.error);

    } else {
        console.log("[" + time + "]" + " n!say has been used");
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
    }

}