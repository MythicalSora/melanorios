class Command {
    constructor(connection, client, message) {
        this.conn = connection;
        this.client = client;
        this.message = message;
    }

    player() {
        return this.message.mentions.members.first();
    }

    hasRole(role_name) {
        return Array.from(this.message.guild.roles.filter(role => {
            return role.name === role_name && this.message.member.roles.has(role.id);
        })).length > 0;
    }

    throwError(message, error) {
        if (!!error) {
            console.error(error);
            message += ": " + error.message;
        }

        this.message.channel.send({
            embed: {
                color: 545453,
                description: '[error] ' + message
            }
        });
    }
}

module.exports = Command;