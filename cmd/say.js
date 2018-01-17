const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class say extends Command {
  run() {
    if (!this.hasRole('Staff')) {
      this.message.reply('You don\'t have perms, scrub').catch(console.error);
  } else {

        console.log("[" + time + "]" + " n!say has been used");
        // To get the "message" itself we join the `args` back into a string with spaces: 
        this.message.delete().catch(O_o=>{}); 
        // And we get the bot to say the thing: 
        this.message.channel.send(Array.prototype.slice.call(arguments).join(' '));
      //   this.message.delete().catch(O_o=>{}); 
      //   this.message.channel.send({
      //     embed: {
      //         color: 433243,
      //         description: `This command has been disabled, my apologies`
      //     }
      // });

}}}

module.exports = say;