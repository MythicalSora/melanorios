const Command = require('../lib/command');
const moment = require('moment');
const time = moment().format('MMM Do h:mma');

class pay extends Command {
    run(user, amount) {
            if (!!this.player()) {
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
                        SET balance = balance + ${parseInt(amount)}
                    WHERE
                        guild_id = ${this.message.guild.id} AND
                        user_id = ${this.player().id}
                `, (error, results, fields) => {
                    if (!error) {
                        this.message.channel.send({
                            embed: {
                                color: 433243,
                                description: `You've succesfully payed ${this.player()} $${amount}.`
                            }
                        });

                        this.conn.query(`
                        UPDATE users
                            SET balance = balance - ${parseInt(amount)}
                        WHERE
                            guild_id = ${this.message.guild.id} AND
                            user_id = ${this.message.author.id}
                    `, (error, results, fields) => {
                        if (!error) {
                            console.log("A transaction has been made");
                            }});
                    } else {
                        this.throwError('Failed to transfer currency', error);
                    }
                });
            } else if (!user) {
                this.throwError('No arguments: `user`');
            }
    
        }
    }

module.exports = pay;