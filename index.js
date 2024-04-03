import {Telegraf} from "telegraf";
import {env} from "./env.js";
// const { Telegraf } = require('telegraf');
// const {env} = require('env')

const bot = new Telegraf(env);

bot.use(async (ctx) => {
    await ctx.reply(JSON.stringify(ctx.update, null, 2));
});

bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));