const moment = require('moment');
const time = moment().format('MMM Do h:mma');
exports.run = async (client, message, [mention, ...reason]) => {
        console.log("[" + time + "]" + " n!ping has been used");

        const m = await message.channel.send("Uhm... Let me see...");
        m.edit(`Ping: ${m.createdTimestamp - message.createdTimestamp}ms`);
};