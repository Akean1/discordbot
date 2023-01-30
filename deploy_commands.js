import { REST, Routes } from "discord.js";
import fs from "node:fs";
import { conf } from "./config.js";

const commands = conf.commands.map((cmd) => cmd.data.toJSON());

// for (const command of conf.commands) {
//   commands.push(command[1].data.toJSON());
//   // console.log(command[1].data.toJSON());
// }

// console.log(conf.commands)

const rest = new REST({ version: "10" }).setToken(conf.token);
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );
    const data = await rest.put(
      Routes.applicationGuildCommands(conf.clientId, conf.guildId),
      { body: commands }
    );
    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.log(error);
  }
})();
