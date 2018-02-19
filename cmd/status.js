const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
const fs = require("fs")
const config = require("../config.json")
class Status extends Command {
  run() {
    let newStatus = Array.prototype.slice.call(arguments).join(' ');
    console.log("[" + time + "]" + " Michael has changed the status to: " + newStatus);
    if (this.message.author.id !== "266286800950132736") return;

    if (!newStatus) return this.message.reply("What should my new Status be ?");

    this.client.user.setActivity(newStatus);
    this.message.reply("The account status has been changed to: " + newStatus);


  }
};

module.exports = Status;