import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("ephemeral_resp")
  .setDescription("Тест ответа в режиме ephemeral");
export function execute(interaction) {
  interaction.reply({ content: "ephemeral answer", ephemeral: true });
}
