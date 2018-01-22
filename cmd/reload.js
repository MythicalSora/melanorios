const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class Reload extends Command {
  run(cmd) {
    if(this.message.author.id !== "266286800950132736") return;

    if(!cmd) return this.message.reply("Which command has to be reloaded ?");
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${cmd}.js`)];
    this.message.reply(`I have reloaded the ${cmd} command`);
    console.log("[" + time + "]" + " n!reload has been used");

  //   this.message.delete().catch(O_o=>{}); 
  //   this.message.channel.send({
  //     embed: {
  //         color: 433243,
  //         description: `This command has been disabled, my apologies`
  //     }
  // });
}};

module.exports = Reload;