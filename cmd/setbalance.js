const Command = require('../lib/command');
const moment = require('moment');
const time = moment().format('MMM Do h:mma');

class SetBalance extends Command {
    run(user, amount) {

        if (!this.hasRole('Staff')) {
            this.message.reply('You don\'t have perms, scrub').catch(console.error);
        } else {
            let player = this.player();

            if (!!player) {
                if (!amount) {
                    return this.message.channel.send({
                        embed: {
                            color: 3453454,
                            description: 'You must enter an amount of money.'
                        }
                    });
                }

                this.conn.query(`
                    UPDATE users
                        SET balance = ${parseInt(amount)}
                    WHERE
                        guild_id = ${this.message.guild.id} AND
                        user_id = ${player.id}
                `, (error, results, fields) => {
                    if (!error) {
                        this.message.channel.send({
                            embed: {
                                color: 433243,
                                description: `I have set users balance to $${amount}.`
                            }
                        });
                    } else {
                        this.throwError('Failed to set user balance', error);
                    }
                });
            } else {
                this.throwError('No arguments: `user`');
            }

        }
    }
}

module.exports = SetBalance;