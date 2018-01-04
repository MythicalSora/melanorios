const moment = require('moment');
const time = moment().format('MMM Do h:mma');
exports.run = async (client, message, [mention, ...reason]) => {
  let modRole = message.guild.roles.find("name", "Staff");
  
    if (!message.member.roles.has(modRole.id))
      return message.reply("You don't have permission, peasant");
  
    if (message.mentions.members.size === 0)
      return message.reply("I require a valid username to kick");
  
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.reply("");
  
    const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} was succesfully kicked`);
    });
  };