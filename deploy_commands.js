import { REST, Routes } from "discord.js";
import { conf } from "./config.js";

const commands = conf.commands.map((cmd) => cmd.data.toJSON());

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
