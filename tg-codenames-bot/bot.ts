import { Bot } from "grammy";
import 'dotenv/config';

const botToken = process.env.BOT_TOKEN;

if (!botToken) {
    throw new Error("Missing token in environment.");
}

const bot = new Bot(botToken);
bot.command("start", (ctx) => ctx.reply(ctx.chatId.toString()));

bot.start();
