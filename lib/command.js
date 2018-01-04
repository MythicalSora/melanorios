export default class Command {
    constructor(connection, client, message) {
        this.conn = connection;
        this.client = client;
        this.message = message;
    }
}