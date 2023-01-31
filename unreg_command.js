import { REST, Routes } from "discord.js";
import { conf } from "./config.js";

const rest = new REST({ version: "10" }).setToken(conf.token);
rest
  .put(Routes.applicationCommands(conf.clientId), { body: [] })
  .then(() => console.log("Successfully deleted all application commands."))
  .catch(console.error);
