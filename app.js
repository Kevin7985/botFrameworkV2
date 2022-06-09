require('dotenv').config();

const botFactory = new (require('./Factory/BotFactory'))(process.env.TELEGRAM_LIB);
const Bot = botFactory.init(process.env.TELEGRAM_TOKEN);

Bot.listen(undefined);