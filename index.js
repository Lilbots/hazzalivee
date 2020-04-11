const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
const fetch = require('node-fetch');

words = ['cool', 'the best', 'fun', 'calling you right now', 'gentle', 'watching you', 'the boss', 'going to take over the world', 'frogs', 'eating', 'your family', 'your family', 'your friend', 'the strongest', 'all the dishwasher in the world', 'strong', 'little', 'polite', 'good', 'bad', '...']

client.on('ready', () => {
    console.log('🐸🐸🐸🐸🐸🐸');
    client.user.setStatus('online')
    client.user.setActivity(`🐸f | 🐸g | By Lil bots#0001`, { type: "WATCHING" })
})

client.on('message', message => {
    if (!message.content.startsWith('🐸')) return;
    const prefix = '🐸';
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd === 'frog' || cmd === 'f') {
        let index = Math.floor(Math.random() * words.length);
        message.channel.send('Frogs are ' + words[index], {
            tts: true
        })
    } else if (cmd === 'gif' || cmd === 'g') {
        fetch(`https://api.tenor.com/v1/random?key=NKMWT4XTTLEC&q=frogs&limit=1`).then(res => res.json())
            .then(json => message.channel.send(json.results[0].url))
    }
})

client.login(token);