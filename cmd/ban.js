const moment = require('moment');
const time = moment().format('MMM Do h:mma');
exports.run = async (client, message, args) => {
  let modRole = message.guild.roles.find("name", "Staff");
    if(message.member.roles.has(modRole.id)) { 
      let banMember = message.mentions.members.first();
      banMember.ban()
      message.channel.sendMessage(banMember + ' was banned ! He/She has received judgement');
    } else {
      return message.reply("You don't have the perms, scrub");
    }
    console.log("[" + time + "]" + " n!ban has been used on " + banMember);
}