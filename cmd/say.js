const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class say extends Command {
  run() {
    if (!this.hasRole('Staff')) {
      this.message.reply('You don\'t have perms, scrub').catch(console.error);
    } else {

      console.log("[" + time + "]" + " say has been used by: " + this.message.author.id + " // " + this.message.author.username);

      this.message.delete().catch(O_o => {});

      this.message.channel.send(Array.prototype.slice.call(arguments).join(' '));

    }
  }
}

module.exports = say;