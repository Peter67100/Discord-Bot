const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzM0MTM2ODgwMjMyMjY3Nzc2.XxNUVQ.dy-MEFDrxLeJ8x0LtUwhlvXyZjw';


bot.on('ready', () =>{
    console.log('This bot is online!');
})


bot.on('message', msg=>{
    if(msg.content== "HELLO") {
        msg.reply('jedi leba!');
      }
    
})

bot.on('message', msg=>{
    if(msg.content== "kralao") {
        msg.reply('ti si dzedaj!');
      }
    
})

bot.login(token);