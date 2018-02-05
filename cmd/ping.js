const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class ping extends Command {
    run() {
        this.message.channel.send('calculating...').then(message => {
            this.message.channel.send(`Ping: ${message.createdTimestamp - this.message.createdTimestamp}ms`);
            message.delete();
        })
    }
};

module.exports = ping;