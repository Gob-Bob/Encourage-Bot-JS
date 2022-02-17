const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

// ready meaning bot has successfully connected to server
client.on("ready", () => {
  console.log('Logged in as ${client.user.tag}!')
})

// message meaning when bot receives a message
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})

// don't put bot's unique token in parenthesis because anyone can access it
client.login(process.env.TOKEN)