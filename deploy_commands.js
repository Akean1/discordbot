import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
import fs from "node:fs";

dotenv.config();

const commands = [];
const commanFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commanFiles) {
  console.log(file);
  const command = await import(`./commands/${file}`);
  console.dir(command);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(process.env.token);
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );
    const data = await rest.put(
      Routes.applicationGuildCommands(
        process.env.clientId,
        process.env.guildId
      ),
      { body: commands }
    );
    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.log(error);
  }
})();
