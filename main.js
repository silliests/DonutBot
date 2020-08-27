const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Donut Bot is online!')
})
require('dotenv').config();
const key = process.env.key;
console.log(key);


client.login(key);