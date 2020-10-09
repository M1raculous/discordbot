/* 
______  ___   ______   ________     _______       _________   _____  __   ______       _______     _____  __   ________
___   |/  /   __<  /   ___  __ \    ___    |      __  ____/   __  / / /   ___  /       __  __ \    __  / / /   __  ___/
__  /|_/ /    __  /    __  /_/ /    __  /| |      _  /        _  / / /    __  /        _  / / /    _  / / /    _____ \
__  /  / /     _  /     _  _, _/     _  ___ |      / /___      / /_/ /     _  /___      / /_/ /     / /_/ /     ____/ /
_ /_/  /_/      /_/      /_/ |_|      /_/  |_|      \____/      \____/      /_____/      \____/      \____/      /____/
©️ 2020 M1raculous All Rights Reserved
Made By M1raculous
Steam: https://steamcommunity.com/id/M1raculous/
Discord: M1raculous#1337
*/
const { Discord, Client, MessageEmbed } = require("discord.js"); 
const token = 'insert your token here :D' //https://discord.com/developers/applications/, create your own here :P
const client = new Client();
client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = 'm!';
/*
So, this is just a template, i've made for you, therefore YOU SHALL NOT just drag & drop it. Since there is a lot commands that isn't uptimezed. 

Please remember, that you can use this as much as you want, but please don't remove my watermarks, i still want some credit....

also, make sure to add me on Discord. Either it's M1raculous#1234, M1raculous#0001, M1raculous#1337. I switch, but you can find my tags, in the code, i update it every week :D
*/

/*
I will show to make a simple command in your index, in this case i've called it my name..
I will also show how to make a command in a other folder, this case it's commands...
*/

//when we wan't something to dissapear, i make it thru my main file. i do like this:
client.on ("message", async message => {

    msg = message.content.toLowerCase();

    if (message.author.bot) return;

    if (msg.startsWith (client.prefix + "test")) { // now it knows that the command is "test"
        message.delete(); //this DELETES the message. 
    }
})
/*
Now we want to make our commands, let's make it in our main file, you can do like this
*/
client.on('message', message => {
    // If the message is test
    if (command === 'test') {
      // And it will send "hello world!"
      message.channel.send('Hello world!');  // a very simple command.
    }
});

/*
let's make an embed message. you can do like this;
*/
 client.on('message', message => {
        if (command === 'embedtest') {

            var M1raculous = new MessageEmbed();
            M1raculous.setAuthor(`M1raculous`)
            M1raculous.setURL('https://google.com')
            M1raculous.setTitle('This is a title')
            M1raculous.setDescription('Hello world!')
            M1raculous.setColor('RANDOM')
            M1raculous.setThumbnail('https://images-ext-2.discordapp.net/external/zr1aH1FYxR7ZJ8PWwUsdOCo2KL9hu8oHbRXeLvbH7zA/%3Fsize%3D256/https/cdn.discordapp.com/avatars/415443330026045440/d85f7ca1b54bd0dd1fcceca0fe656638.png')
            M1raculous.setImage('https://images-ext-2.discordapp.net/external/zr1aH1FYxR7ZJ8PWwUsdOCo2KL9hu8oHbRXeLvbH7zA/%3Fsize%3D256/https/cdn.discordapp.com/avatars/415443330026045440/d85f7ca1b54bd0dd1fcceca0fe656638.png')
            M1raculous.setFooter('this is a footer!')
            M1raculous.setTimestamp()
            message.channel.send(M1raculous)
        }
})  


/*
So now we now how to make a simple command! i will make alot of guides when i get the time :D
*/
client.login(token); // logs the bot, so it starts
