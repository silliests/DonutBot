const Discord = require('discord.js');

const client = new Discord.Client();

function warnUser1(user) {
    client.channels.cache.get('748683141467734036').send("<@" + user + ">" + " please don't talk in the counting channel. <a:catJAM:747916921785286711>");
    client.channels.cache.get('748683141467734036').send("Please delete your message <a:catJAM:747916921785286711>")
}

function warnUser2(user) {
    client.channels.cache.get('748683141467734036').send("<@" + user + ">" + " please don't put 2 numbers in a row. <a:catJAM:747916921785286711>");
    client.channels.cache.get('748683141467734036').send("Please delete your message <a:catJAM:747916921785286711>")
}

client.once('ready', () => {
    console.log('Donut Bot is online!')
    client.user.setActivity('robot things...');


})
require('dotenv').config();
const key = process.env.key;
const prefix = '!';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  var lastCount = 0;
  var lastUser = "";
  var user = "";
client.on('message', message =>{
    user = message.author.id;
    if (message.author.bot)return;

   if (message.channel.name === "cat-jam") {
    if (message.content.includes(":catJAM:")){
        var random = getRandomInt(0, 100);
        if(random >= 52) {
        message.channel.send("<a:catJAM:747916921785286711>");
        } else if (random >= 6) {
        message.react('747916921785286711');
        } else {
            message.channel.send("https://tenor.com/view/cat-jam-fast-gif-18134927");
        }
    }
       }
      if(message.channel.name.startsWith("╠counting")) {
        const args = message.content.trim().split(' ');
       var count = parseInt(args);
      if (lastUser === "") {
          lastUser = user;
      } else {
          if (user === lastUser) {
             warnUser2(user);
          }
          lastUser = user;
      }
       if (lastCount === 0) {
           lastCount = count;
       } else {
           if(count === lastCount + 1) {
            lastCount = count;
           } else {
               warnUser1(user);
           }
       }
    }
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
    if (command === 'findseed' && message.channel.name === "findseed"){
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