const { 
Telegraf, 
Markup 
} = require("telegraf")
require("dotenv").config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Привіт ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнайомець"("ка")"'}!`))   
bot.help((ctx) => ctx.reply(text.commands))


bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))