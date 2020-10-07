const {Discord, Client, Collection, MessageEmbed} = require("discord.js"); 
const token = 'NotU1NDE5NDkxOTE1MR3AL.X2DBOQ.TOK-3.NGIiPdSvX4f_B1NyoDxd4p2Y' //https://discord.com/developers/applications/, create your own here :P
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
client.on("message"), async mesage => {

  msg = message.content.toLowerCase();

    	if (message.author.bot) return;
        if (msg.startsWith ("!test")) { // if the command is !test then it will
        message.delete(); //delete the message.
    }
})

client.login(token); // logs the bot, so it starts
