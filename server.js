
const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


////////////////////BOT REAL///////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("BOT LISTO!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("!yt")) {
     message.channel.send("Mi canal principal (ElMariana)📹👉https://www.youtube.com/channel/UC52YgT6TITyBpck82V_N_8g Sigueme :)");
   }
 
 });
 
 client.login("ODA2NTc0OTkwNDU1NDcyMTI4.YBrbfw.TUE-UDOj5vebwt3OxcgCOzxkFoU");