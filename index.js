const { 
Telegraf, 
Markup 
} = require("telegraf")
require("dotenv").config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Привіт ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнайомець"("ка")"'}!`))   
bot.help((ctx) => ctx.reply(text.commands))
bot.command('donate', (ctx) => ctx.reply('Карта адміна 💸5168752013143535💸'))
bot.command('application', (ctx) => ctx.replyWithMarkdown('Для затвердження адміністратором необхідно відповісти на декілька запитань, щоб почати напишіть "Почати"'))

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))