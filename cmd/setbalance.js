const Command = require('../lib/command');
const moment = require('moment');
const time = moment().format('MMM Do h:mma');

export default class SetBalance extends Command {
    run(user, amount) {
        let player = this.message.mentions.members.first() || this.message.author;
        let modRole = this.message.guild.roles.find("name", "Staff");
    
        if (!this.message.member.roles.has(modRole.id)) {
            this.message.reply("You don't have perms, scrub").catch(console.error);
        } else {
            if (user == player) {
                if (!amount) {
                    return this.message.channel.send({
                        embed: {
                            color: 3453454,
                            description: 'You must enter an amount of money.'
                        }
                    });
                }

                conn.query(`
                    UPDATE users
                        SET balance = ${parseInt(amount)}
                    WHERE
                        guild_id = ${this.message.guild.id} AND
                        user_id = ${user.id}
                `, (error, results, fields) => {
                    if (!error) {
                        this.message.channel.send({
                            embed: {
                                color: 433243,
                                description: `I have set users balance to $${amount}.`
                            }
                        });
                    } else {
                        this.message.channel.send({
                            embed: {
                                color: 545453,
                                description: `Failed to set user balance`
                            }
                        });
                    }
                });
            } else if (!user) {
                return this.message.channel.send({
                    embed: {
                        color: 545453,
                        description: 'No arguments: `user`'
                    }
                });
            }
    
        }
    }
}