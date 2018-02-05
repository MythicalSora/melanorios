const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class kick extends Command {
  run(cmd, user, args) {
    console.log("[" + time + "]" + " kick has been used by: " + this.message.author.id + " // " + this.message.author.username);
    if (!this.hasRole('Staff')) {
      this.message.reply('You don\'t have perms, scrub').catch(console.error);
    } else {

      if (this.message.mentions.members.size === 0)
        return this.message.reply("I require a valid username to kick");

      if (!this.message.guild.me.hasPermission("KICK_MEMBERS"))
        return this.message.reply("");

      const kickMember = this.message.mentions.members.first();

      kickMember.kick(reason.join(" ")).then(member => {
        this.message.reply(`${member.user.username} was succesfully kicked`);
      });
    }
  }
};

module.exports = kick;