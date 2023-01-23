import { SlashCommandBuilder } from "discord.js";

const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replace with pong!");
async function execute(interaction) {
  await interaction.replay("pong!");
}

export { data, execute };
