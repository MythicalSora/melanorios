const Command = require('../lib/command');
const moment = require('moment');
const time = moment().format('MMM Do h:mma');
var DateDiff = require('date-diff');

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
                console.log('logging succesfull')
            } else {
                this.throwError('Failed to set user balance', error);
            }
        });

        this.conn.query(`
            SELECT *
            FROM commandlog
            WHERE
                guild_id = '${this.message.guild.id}' AND
                user_id = '${this.message.author.id}'
            `, {
            }, (error, results, fields) => {
                const date1 = `${datetime}`
                const date2 = new Date();
                
                var diff = new DateDiff(date1, date2);

                if(diff.hours() == -24 || diff.hours() < -24) {
                    this.message.channel.send({
                        embed: {
                            title: 'Daily',
                            color: 0xF1C40F,
                            fields: [{
                                    name: 'You received $100',
                                    value: `${this.message.author.username}, you have to wait 24 hours before you can use this command again`,
                                    inline: true
                                }
                            ],
                        }
                    });
                    this.conn.query(`
                    UPDATE users
                    SET balance = balance - ${parseInt(100)}
                WHERE
                    guild_id = ${this.message.guild.id} AND
                    user_id = ${this.message.author.id}
                    `, (error, results, fields) => {
                        if (!error) {
                            console.log("[" + time + "]" + this.message.author.username + " (" + this.message.author.id + ")" + " has received $100 on their account ");
                        }

                    })

                    this.conn.query(`
                    DELETE FROM commandlog 
                    WHERE
                        guild_id = '${this.message.guild.id}' AND
                        user_id = '${this.message.author.id}'
                    `, (error, results, fields) => {
                        console.log('Old entry removed from DB')
                    }
                
                )
                };
            
            })
    }
}


module.exports = Daily;