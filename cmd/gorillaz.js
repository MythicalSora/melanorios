const moment = require('moment');
const time = moment().format('MMM Do h:mma');
const Command = require('../lib/command');
class Gorillaz extends Command {
  run() {
    if (this.message.member.voiceChannel) {
        this.message.member.voiceChannel.join()
          .then(connection => {
            const song = Array.prototype.slice.call(arguments).join(' ');;
            this.message.channel.send({
                embed: {
                  color: 3447003,
                  title: "Now Playing!",
                  description: song}
                    }
                );
            const dispatcher = connection.playFile('C:/Users/Michael/Music/Gorillaz/' + song + '.mp3');
            console.log("[" + time + "] " + song + " has been queued by: " + this.message.author.id + " // " + this.message.author.username);
            dispatcher.on('end', () => {
                this.message.channel.send(song + " stopped playing.")
                dispatcher.end();
              });
          })
          .catch(console.log);
      } else if(!this.message.member.voiceChannel) {
        this.message.reply('You need to join a voice channel first!');
      }
      else {
          this.message.reply(song + " hasn't been found.");
      }
  }
}

module.exports = Gorillaz;