const env = require('../.env');
const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf(env.token);

const tecladoCarne = Markup.keyboard([
  [
    '🐷 Porco',
    '🐮 Vaca',
    '🐑 Carneiro'
  ],
  [
    '🐔 Frango',
    '🐟 Peixe',
    '🐙 Frutos do mar'
  ],
  [
    '🍄 Vegetariano'
  ],
  [
    '🍖 Ainda não decidi'
  ]
]).resize();

bot.start(async ctx => {
  const nome = ctx.update.message.from.first_name;

  await ctx.reply(`Seja bem vindo, ${nome}!`);

  await ctx.reply(`Qual bebida você prefere?`, Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime());
})

bot.hears(['Coca', 'Pepsi'], async ctx => {
  await ctx.reply(`Nossa! Eu também gosto de ${ctx.match}`);
  await ctx.reply(`Qual a sua carne predileta?`, tecladoCarne);
})

bot.hears('🐮 Vaca', ctx => ctx.reply('A minha preferida também!'));
bot.hears('🍄 Vegetariano', ctx => ctx.reply('Parabéns, você é um ser iluminado!'));
bot.on('text', ctx => ctx.reply('Legal!'));

bot.startPolling();