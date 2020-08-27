const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Donut Bot is online!')
})
require('dotenv').config();
const key = process.env.key;
console.log(key);


client.login('NzQ4MzA2NTU5NDYwOTY2NDMy.X0bgyg.AbKYUgLQM9UuGK9j-3tcB61fAeM');