require("dotenv").config(); //to start process from .env file
const {Client, GatewayIntentBits}=require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');


const client=new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		
	],
});



client.on("messageCreate", message => {
    const channel = message.member.voice.channel;
	if (message.content === 'join') {
		const connection = joinVoiceChannel({
			channelId: channel.id,
			guildId: message.guild.id,
			adapterCreator: message.guild.voiceAdapterCreator,
		});

	
		
	}
})
// client.channels.fetch(id) // voice channel's id
//     .then((channel) => { // channel object
//         const VoiceConnection = joinVoiceChannel({
//             channelId: channel.id, // the voice channel's id
//             guildId: channel.guild.id, // the guild that the channel is in
//             adapterCreator: channel.guild.voiceAdapterCreator // and setting the voice adapter creator
//         });
//     });






client.once("ready", () =>{
	console.log("BOT IS ONLINE"); //message when bot is online
	// console.log(client.guilds.cache)
})

client.on("messageCreate", message => {
    if (message.content === "ping") {
        message.channel.send({ content: 'pong'})
    }
});
// client.user.send("hello")


client.login(process.env.TOKEN);
