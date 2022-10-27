const env = require('../.env');
const { Telegraf } = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(async (ctx) => {
  await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!`);

  await ctx.replyWithHTML(
    `
      Destacando mensagem <b>HTML</b>
      <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
      <a href="https://google.com">Google</a>
    `
  )

  await ctx.replyWithMarkdownV2('Destacando mensagem *Markdown*');

  await ctx.replyWithPhoto({source: `${__dirname}/cat.jpg`});

  await ctx.replyWithPhoto('https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg',
  {
    caption: 'Olha o estilo!'
  });

  await ctx.replyWithPhoto({
    url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg'
  });

  await ctx.replyWithLocation(-31.770462, -52.315335);

  await ctx.replyWithVideo('https://woodpecker.co/blog/app/uploads/2021/03/A-Guide-to-Personalized-Email-Using-Individual-Videos-and-GIFs-blog-15.21.56.gif')
})

bot.startPolling();