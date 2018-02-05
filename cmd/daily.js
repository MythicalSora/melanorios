const Command = require('../lib/command');
const moment = require('moment');
const time = moment().format('MMM Do h:mma');

class Daily extends Command {
    run() {
        console.log("[" + time + "]" + " daily has been used by: " + this.message.author.id + " // " + this.message.author.username);
        this.conn.query(`
            INSERT INTO commandlog
                SET ?
        `, {
            guild_id: this.message.guild.id,
            user_id: this.message.author.id,
            command: this.message,
            user_name: this.message.author.username
        }, (error, results, fields) => {
            if (!error) {
                this.message.channel.send({
                    embed: {
                        color: 433243,
                        description: `This use has been logged`
                    }
                });
            } else {
                this.throwError('Failed to set user balance', error);
            }
        });
    }
}

module.exports = Daily;