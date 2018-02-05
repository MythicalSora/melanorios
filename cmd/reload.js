const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class Reload extends Command {
  run(cmd) {
    console.log("[" + time + "]" + " reload has been used on: " + cmd );
    if (this.message.author.id !== "266286800950132736") return;

    if (!cmd) return this.message.reply("Which command has to be reloaded ?");
    delete require.cache[require.resolve(`./${cmd}.js`)];
    this.message.reply(`I have reloaded the ${cmd} command`);

  }
};

module.exports = Reload;