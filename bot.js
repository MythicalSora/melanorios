const Discord = require("discord.js");
const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const client = new Discord.Client();
const sql = require('sqlite');

// Whatever you called your database
sql.open('./balance.db');

const config = require("./config.json");

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

  client.user.setGame(`like a total dickhead`);
});

client.on("message", message => {
  if (message.author.bot) return;


  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});
client.login(config.token);