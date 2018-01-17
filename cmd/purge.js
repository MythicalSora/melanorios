const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class purge extends Command {
  run(num) {
    if (!this.hasRole('Staff')) {
      this.message.reply('You don\'t have perms, scrub').catch(console.error);
    }
    else {
      console.log("[" + time + "]" + " n!purge has been used");
      const deleteCount = parseInt(num, 10) + 1;

      console.log(deleteCount)

      if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return this.message.reply("I need a value between 2 and 100");

      this.message.channel.fetchMessages({limit: deleteCount}).then(fetched => {
        console.log(Array.from(fetched).length)
      this.message.channel.bulkDelete(fetched).catch(error => 
          this.message.reply(`Couldn't delete messages because of: ${error}`));
    });
  }
// this.message.delete().catch(O_o=>{}); 
// this.message.channel.send({
//   embed: {
//       color: 433243,
//       description: `This command has been disabled, my apologies`
//   }
// });
 }};

module.exports = purge;
