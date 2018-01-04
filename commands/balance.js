const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const sql = require('sqlite');
exports.run = async (client, message, args) => {
let user = message.mentions.members.first() || message.author;   
    sql.get(`SELECT * FROM economy WHERE guildid = '${message.guild.id}' AND userid = '${message.author.id}'`).then(row => {
        if (!row) {
            sql.run('INSERT INTO economy (guildid, userid, balance) VALUES (?, ?, ?)', [message.guild.id, user.id, 0]);
            message.channel.send("Your account has been created, please use the command another time to view your balance")
};
    message.channel.send({embed:{
        title: "Balance",
        color: 0xF1C40F,
        fields:[{
            name: "User",
            value: `${message.author.username}`,
            inline: true
    },
    {
        name: "Balance",
        value: `${row.balance}`,
        inline: true
    }],
    }})
});
}