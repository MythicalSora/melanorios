const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class help extends Command {
  run() {
    console.log("[" + time + "]" + " help has been used by: " + this.message.author.id + " // " + this.message.author.username);
    this.message.channel.send({
      embed: {
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
            value: "Displays the current ping"
          },
          {
            name: "m!kick <user>",
            value: "Kicks a person from the server"
          },
          {
            name: "m!ban <user>",
            value: "Bans a user from the server"
          },
          {
            name: "m!purge",
            value: "Deletes the given amount of messages"
          },
          {
            name: "m!balance",
            value: "Displays the amount of money you currently have"
          },
          {
            name: "m!setbalance <player> <amount>",
            value: "Changes a user's balance"
          },
          {
            name: "m!pay <player> <amount>",
            value: "Pay the user a specified amount of money"
          },
          {
            name: "m!daily",
            value: "Logs the use, still in development"
          },
          {
            name: "m!gorillaz <song>",
            value: "Choose a gorillaz song from the following albums: Gorillaz / Demon Days / Humanz"
          },
          {
            name: "m!leave",
            value: "Make the bot leave the VC after you're done."
          },
          {
            name: "m!name <name>",
            value: "Developers can change the bot's username"
          },
          {
            name: "m!status <status>",
            value: "Developers can change the bot's 'Playing: '"
          },
          {
            name: "m!avatar <url>",
            value: "Developers can change the bot's Avatar"
          }

        ],
        timestamp: new Date(),
        footer: {
          text: "© Myth#2065"
        }
      }
    });
  }
}

module.exports = help;