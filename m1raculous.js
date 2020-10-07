/* ______  ___   ______   ________     _______       _________   _____  __   ______       _______     _____  __   ________    
 ___   |/  /   __<  /   ___  __ \    ___    |      __  ____/   __  / / /   ___  /       __  __ \    __  / / /   __  ___/    
__  /|_/ /    __  /    __  /_/ /    __  /| |      _  /        _  / / /    __  /        _  / / /    _  / / /    _____ \     
__  /  / /     _  /     _  _, _/     _  ___ |      / /___      / /_/ /     _  /___      / /_/ /     / /_/ /     ____/ /     
_ /_/  /_/      /_/      /_/ |_|      /_/  |_|      \____/      \____/      /_____/      \____/      \____/      /____/  
©️ 2020 M1raculous All Rights Reserved  
Made By M1raculous
Steam: https://steamcommunity.com/id/M1raculous/
Discord: M1raculous#1337
*/    
const {Discord, Client, Collection, MessageEmbed} = require("discord.js"); 
const token = 'NzU1NDE5NDkxOTE1MTM3MTM2.X2DBOQ.K1w-GIiPdSvX4f_B1NyoDxd4p2Y' //https://discord.com/developers/applications/, create your own here :P


const client = new Client ({
    disableEveryone: true,
    disableEvents: ["TYPING_START"]
});

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
client.on ("message", async mesage => {

  msg = message.content.toLowerCase();

    	if (message.author.bot) return;
        if (msg.startsWith ("!test")) { // if the command is !test then it will
        message.delete(); //delete the message.
    }
})

client.login(token); // logs the bot, so it starts
