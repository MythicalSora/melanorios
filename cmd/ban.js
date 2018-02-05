const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class ban extends Command {
    run(cmd, user, args) {
        console.log("[" + time + "]" + " ban has been used by: " + this.message.author.id + " // " + this.message.author.username);
        if (!this.hasRole('Staff')) {
            this.message.channel.send({
                embed: {
                    color: 433243,
                    description: `You don't have perms, scrub`
                }
            });
        } else if (this.message.mentions.members.size === 0) {
            this.message.channel.send({
                embed: {
                    color: 433243,
                    description: `I need a username`
                }
            });
        } else {
            let banMember = this.message.mentions.members.first();
            banMember.ban()
            this.message.channel.send({
                embed: {
                    color: 433243,
                    description: banMember + ` has been banned from the server, he/she won't be missed.`
                }
            });

        }
    }
};

module.exports = ban;