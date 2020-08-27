const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Donut Bot is online!')
})
require('dotenv').config();
const key = process.env.key;
const prefix = '!';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
    if (command === 'findseed'){
    var i = 0;
    var eyes = 0;
    for(i = 0; i < 12; i++) {
        if (getRandomInt(0, 10) === 1) {
            eyes++;
        }
    }
    message.channel.send(message.author.username + ' --> Your seed is a ' + eyes + ' eye.')
    }
})




client.login(key);