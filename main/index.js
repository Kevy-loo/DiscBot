require("dotenv").config(); //to start process from .env file
const {Client, GatewayIntentBits}=require("discord.js");
const client=new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});



// const guild = client.guilds.cache.get("<server id>");
// const channel = guild.channels.cache.get("<channel id>")

client.once("ready", () =>{
    console.log("BOT IS ONLINE"); //message when bot is online
})

client.on("messageCreate", message => {
    if (message.content === "ping") {
        message.channel.send({ content: 'pong'})
    }
});
// client.user.send("hello")
client.login(process.env.TOKEN);
