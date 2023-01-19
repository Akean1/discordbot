import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.GuildMessages] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  console.log(msg);
  if (msg.startsWith("!")) {
    msg.channel.send("I hear you.");
  }
});

// client.on("interactionCreate", async (interaction) => {
//   if (!interaction.isChatInputCommand()) return;
//
//   if (interaction.commandName === "ping") {
//     await interaction.reply("Pong!");
//   }
// });

client.login(process.env.token);
