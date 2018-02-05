const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class Purge extends Command {
  run(num) {
    if (!this.hasRole('Staff')) {
      this.message.reply('You don\'t have perms, scrub').catch(console.error);
    } else {
      console.log("[" + time + "]" + " purge has been used by: " + this.message.author.id + " // " + this.message.author.username);
      const deleteCount = parseInt(num, 10) + 1;

      if (!deleteCount || deleteCount < 2 || deleteCount > 100)
        return this.message.reply("I need a value between 2 and 100");

      this.message.channel.fetchMessages({
        limit: deleteCount
      }).then(fetched => {
        this.message.channel.bulkDelete(fetched).catch(error =>
          this.message.reply(`Couldn't delete messages because of: ${error}`));
      });
    }
  }
};

module.exports = Purge;