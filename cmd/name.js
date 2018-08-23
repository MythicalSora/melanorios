const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class Name extends Command {
  run(newName) {
    console.log("[" + time + "]" + " Michael has changed the name to: " + newName);
    if (this.message.author.id !== "266286800950132736") return;

    if (!newName) return this.message.reply("What should my new name be ?");

    this.client.user.setUsername(newName);
    this.message.reply("The account has been renamed to: " + newName);

  }
};

module.exports = Name;