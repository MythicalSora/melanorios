const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class help extends Command {
  run() {
    console.log("[" + time + "]" + " n!help has been used");
this.message.channel.send({embed: {
  color: 3447003,
  author: {
    name: this.client.user.username,
    icon_url: this.client.user.avatarURL
  },
  title: "Help",
  description: "Here you can find the commands we have so far !",
  fields: [{
      name: "m!help",
      value: "This command displays this message. What else did you expect ?"
    },
    {
      name: "m!ping",
      value: "This command displays the current ping"
    },
    {
      name: "m!kick <user>",
      value: "This command kicks a user from this server"
    },
    {
      name: "m!ban <user>",
      value: "This command bans a user from this server"
    },
    {
      name: "m!purge",
      value: "Should delete the given amount of messages"
    }          
  ],
  timestamp: new Date(),
  footer: {
    text: "© Myth#2065"
  }
}});
  }
}

module.exports = help;