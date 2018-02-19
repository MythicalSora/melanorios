const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class Avatar extends Command {
  run(newAvatar) {
    console.log("[" + time + "]" + " Michael has changed the avatar to: " + newAvatar);
    if (this.message.author.id !== "266286800950132736") return;

    if (!newAvatar) return this.message.reply("What should my new Avatar be ?");

    this.client.user.setAvatar(newAvatar);
    this.message.reply("The account's avatar has been changed to: " + newAvatar);

  }
};

module.exports = Avatar;