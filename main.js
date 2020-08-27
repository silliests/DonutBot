const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Donut Bot is online!')
})
require('dotenv').config();
const key = process.env.key;
const prefix = '!';

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || !message.author.bot) return;

   

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }
})




client.login(key);