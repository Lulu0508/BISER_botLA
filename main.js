const Discord = require('discord.js')
const fs      = require('fs')
const Embeds  = require('./embed')
const superagent = require("superagent")
const { Client } = require('discord.js');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const yt = require('ytdl-core');
const got = (`got`);
const https = require('https')


var client = new Discord.Client()



client.on('warn', console.warn);
client.on('error', console.error);
client.on('ready', () => console.log(`${client.user.username} is ready!`));
client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));
client.on('reconnecting', () => console.log('I am reconnecting now!'));
client.on("ready", () => {

    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
   
    client.user.setActivity(`#TeamBISER`)
    // #help | Auf ${client.guilds.size} Servern(Beta 2.2.0)
    client.user.setStatus("online")
    
  });

var COMMANDS = {

    say:               cmd_say,
    join:              cmd_join,
    play:              cmd_play,
    teambiser:         cmd_teambiser
    
//Evoli farbe #a13806 und pikachu #f6e600
}

function cmd_say(msg, args){
    if(!args[0]) return msg.channel.send(`<@${msg.author.id}> Was soll ich denn Sagen?`)
    msg.channel.send(args.join(" "))
    msg.delete();
}
async function cmd_join(msg, args){
    if (msg.member.voiceChannel) {
        const connection = await msg.member.voiceChannel.join();
      } else {
        msg.reply('Du musst zuerst einem Voice Channel joinen!');
      }
}
async function cmd_play(msg, args){
    if(!args[0]) return msg.channel.send(`Es gibt bis jetzt folgende Songs
m!play Aspirin
m!play CrazyFrog
m!play Spezi
m!play NochSoJung`)
        const connection = await message.member.voiceChannel.join();
        if(args[0] == "Aspirin"){ const dispatcher = connection.playFile('./Asperin.mp3');
        msg.channel.send("Ich Spiele nun `Aspirin`")
    
}
if(args[0] == "CrazyFrog"){
    const dispatcher = connection.playFile('./CrazyFrog.mp3');
        msg.channel.send("Ich Spiele nun `CrazyFrog`")
}
if(args[0] == "Spezi"){
    connection.playFile('./Spezi.mp3');
    msg.channel.send("Ich Spiele nun `Spezi`")
}
if(args[0] == "NochSoJung"){
    connection.playFile('./NochSoJung.mp3');
    msg.channel.send("Ich Spiele nun `NochSoJung`")
}
}
function cmd_teambiser(msg, args){
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
    let BISEREmbed = new Discord.RichEmbed()
    .setTitle("TeamBiser")
    .setThumbnail(client.guilds.get("403539604118175744").avatarURL)
    .addField("Anzahl", client.guilds.get("403539604118175744").members.size)
    msg.channel.send(BISEREmbed)
}
//##Music##\\


client.on('ready', () => {
    console.log('ready!');
    const onlinechannel = client.channels.get('name', 'lobby')
    if(!onlinechannel) return
    msg.onlinechannel.send("Hi bin Online.")
});

// client.on('message', msg => {
// 	if (!msg.content.startsWith(config.prefix)) return;
// 	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(config.prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(config.prefix.length).split(' ')[0]](msg);
// });
client.on('message', (msg) =>{

    var cont    = msg.content,
        author  = msg.member,
        chan    = msg.channel,
        guild   = msg.guild
        message = msg

        if(cont.startsWith(config.prefix)) {
        //#author.id != client.user.id && 
        var invoke = cont.split(' ')[0].substr(config.prefix.length)
            args   = cont.split(' ').slice(1)

            if(invoke in COMMANDS){
                COMMANDS[invoke](msg, args)
            }
        }
    
})

client.on("message", (message) => {
    if (message.content.startsWith("<@424629228642893824>")) {
      message.channel.send("Was gibts?");
    }
});



client.login(config.bottoken)