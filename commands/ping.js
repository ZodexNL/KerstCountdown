const { CommandType, commandModule } = require('@sern/handler')

exports.default = commandModule({
  name: 'dong',
  description: 'A ping pong command',
  type: CommandType.Both,
  execute(ctx) {
    ctx.reply('pong!')
  }
});