import { SlashCommandBuilder } from "discord.js";

const data = new SlashCommandBuilder()
  .setName("aping")
  .setDescription("Тестовая комманда для проверки импорта из модуля.");
async function execute(interaction) {
  await interaction.reply("Комманда из модуля успешно щагружена.");
}

export { data, execute };
