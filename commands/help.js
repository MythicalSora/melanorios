const moment = require('moment');
const time = moment().format('MMM Do h:mma');
exports.run = async (client, message, args) => {
    console.log("[" + time + "]" + " n!help has been used");
message.channel.send({embed: {
  color: 3447003,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "Help",
  description: "Here you can find the commands we have so far !",
  fields: [{
      name: "n!help",
      value: "This command displays this message. What else did you expect ?"
    },
    {
      name: "n!ping",
      value: "This command displays the current ping"
    },
    {
      name: "n!kick <user>",
      value: "This command kicks a user from this server"
    },
    {
      name: "n!ban <user>",
      value: "This command bans a user from this server"
    },
    {
      name: "n!purge",
      value: "Should delete the given amount of messages"
    }          
  ],
  timestamp: new Date(),
  footer: {
    text: "© MythicalSora"
  }
}});
}