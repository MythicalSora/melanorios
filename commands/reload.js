const moment = require('moment');
const time = moment().format('MMM Do h:mma');
exports.run = async (client, message, args) => {
    if(message.author.id !== "266286800950132736") return;

    if(!args || args.size < 1) return message.reply("Which command has to be reloaded ?");
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`I have reloaded the ${args[0]} command`);
    console.log("[" + time + "]" + " n!reload has been used");
  };