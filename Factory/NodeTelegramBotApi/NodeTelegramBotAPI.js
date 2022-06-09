const TelegramBot = require('node-telegram-bot-api');

class NodeTelegramBotAPI {
  static instance = null;

  constructor(token) {
    if (NodeTelegramBotAPI.instance) {
      return NodeTelegramBotAPI.instance;
    }

    NodeTelegramBotAPI.instance = this;

    this.bot = new TelegramBot(token, {polling: true});
  }

  async listen(callback) {
    this.bot.on('text', message => {
      console.log(message);
    });
  }
}

module.exports = NodeTelegramBotAPI;