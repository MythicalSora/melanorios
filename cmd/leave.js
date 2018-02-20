const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class Leave extends Command {
  run() {
    this.message.member.voiceChannel.leave();
  }
}

module.exports = Leave;