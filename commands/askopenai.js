// import { SlashCommandBuilder } from "discord.js";
// import { ask } from "../ai/ai.js";

// const data = new SlashCommandBuilder()
//   .setName("ask")
//   .setDescription("Задай вопрос chatGPT.");
// async function execute(interaction) {
//   const answer = await ask(interaction.content)
//   // console.log(answer)
//   await interaction.reply(answer);
// }

// export { data, execute };

import { SlashCommandBuilder } from "discord.js";
import {ask} from "../ai/ai.js"

const data = new SlashCommandBuilder()
  .setName("Ask")
  .setDescription("Тестовая комманда для проверки импорта из модуля.");
async function execute(interaction) {
  answer = await ask(interaction.content)
  await interaction.reply(answer);
}

export { data, execute };
