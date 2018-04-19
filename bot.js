const Discord = require('discord.js');
const client = new Discord.Client();
const mysql = require('mysql');
const process = require('process');
const config = require('./config.json');

let conn = mysql.createConnection({
  host : config.mysql.host,
  user : config.mysql.user,
  password : config.mysql.password,
  database : config.mysql.database
});

conn.connect();

client.on('ready', () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);

  client.user.setActivity(config.status);
});

client.on('message', message => {
  if (message.author.bot || message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let Command = require(`./cmd/${command}.js`),
      cmd = new Command(conn, client, message);

    cmd.run.apply(cmd, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(config.token);

process.on('exit', () => {
  conn.end();
});