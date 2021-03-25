const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');

client.on('ready', () => {
 client.user.setActivity("Under Development, Foz#0420");
 console.log("Bot ("+client.user.tag+") Ready!");
 });
 //nitrocode announce
 client.on("message", async message => {
  const prefix = "!";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(message.channel.id == 824388177623515237 && message.author.id != client.user.id)


  if(command === "nitro"){
    message.author.send('```Here are 3 nitro codes:```');
  }
});

//nitrocodes
 client.on("message", async message => {
  const prefix = "!";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  
if(message.channel.id == 824388177623515237 && message.author.id != client.user.id)

  if(command === "nitro"){
    var i = 0;
      while (i<3) { //Number of messages
      var password = generator.generate({
      length: 16,
      numbers: true
  });
    message.author.send("https://discord.gift/" + password)
      i++;
    }
    }
  })

//youtube advert
client.on("message", async message => {
  const prefix = "!";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(message.channel.id == 824388177623515237 && message.author.id != client.user.id)

  if(command === "nitro"){
    message.author.send('```Youtube:``` https://www.youtube.com/c/Foz69 ```Subscribe or gay```');
  }
});
//nitro has been send
client.on("message", async message => {
  const prefix = "!";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(message.channel.id == 824388177623515237 && message.author.id != client.user.id)


  if(command === "nitro"){
    message.reply(`<${message.author}> ⭑`)
    message.channel.send(' ``` ✨ 3 Unchecked Nitro Codes Have Been Send To Your Dms! ```');
  }
});



client.login('ODIzOTM0MzY4NTQzMTQ2MDQ2.YFoCrQ.eN-82RfKMX7C3yDWKrv2sspy7RU');
