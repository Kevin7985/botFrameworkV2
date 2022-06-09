const botLibs = new Map([
  ['NodeTelegramBotApi', './NodeTelegramBotApi/NodeTelegramBotAPI']
]);

class BotFactory {
  constructor(lib) {
    if (!botLibs.has(lib)) {
      throw 'This bot library is not supported!';
    }

    this.lib = lib;
  }

  init(token) {
    return new (require(botLibs.get(this.lib))) (token);
  }
}

module.exports = BotFactory;