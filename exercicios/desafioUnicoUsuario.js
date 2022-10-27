const env = require('../.env');
const { Telegraf } = require('telegraf');
const bot = new Telegraf(env.token);

const authenticatedUserId = 1095353005;

bot.start(async (ctx, next) => {
  await ctx.reply('Verificando usuário...');
  next();
})

bot.on('text', async (ctx) => {
  const from = await ctx.update.message.from;

  if(from.id === authenticatedUserId) {
    ctx.reply('Ao seu dispor, mestre!');
    return;
  }

  ctx.reply('Sinto muito, mas eu só falo com o meu mestre.');
})

bot.startPolling();