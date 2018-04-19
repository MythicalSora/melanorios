const Command = require('../lib/command');
const moment = require('moment');
const time = moment().format('MMM Do h:mma');

class Balance extends Command {
    sendBalance(balance) {
        console.log("[" + time + "]" + " balance has been used by: " + this.message.author.id + " // " + this.message.author.username);
        this.message.channel.send({
            embed: {
                title: 'Balance',
                color: 0xF1C40F,
                fields: [{
                        name: 'User',
                        value: `${this.message.author.username}`,
                        inline: true
                    },
                    {
                        name: 'Balance',
                        value: `${balance}`,
                        inline: true
                    }
                ],
            }
        });
    }

    run() {
        this.conn.query(`
            SELECT *
            FROM aphi
            WHERE
                guild_id = '${this.message.guild.id}' AND
                user_id = '${this.message.author.id}'
        `, (error, results, fields) => {
            if (results.length === 0) {
                this.conn.query(`
                    INSERT INTO aphi SET ?
                `, {
                    guild_id: this.message.guild.id,
                    user_id: this.message.author.id,
                    user_name: this.message.author.username,
                    balance: 0
                }, (error, results, fields) => {
                    if (!error) {
                        this.message.channel.send('Your account has been created');
                        this.sendBalance(0);
                    } else {
                        this.throwError('Failed to create user: ', error);
                    }
                });

                return;
            }
            this.sendBalance(results[0].balance);
        });
    }
}

module.exports = Balance;