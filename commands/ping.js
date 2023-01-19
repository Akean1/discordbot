import { SlashCommandBuilder } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replace with pong!"),
  async execute(interaction) {
    await interaction.replay("pong!");
  },
};
