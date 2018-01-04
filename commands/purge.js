const moment = require('moment');
const time = moment().format('MMM Do h:mma');
exports.run = async (client, message, args) => {
console.log("[" + time + "]" + " n!purge has been used");
// This command removes all messages from all users in the channel, up to 100.
// get the delete count, as an actual number.
const deleteCount = parseInt(args[0], 10);

if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply("I need a value between 2 and 100");

const fetched = await message.channel.fetchMessages({count: deleteCount});
message.channel.bulkDelete(fetched)
  .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
};
