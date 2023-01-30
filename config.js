import dotenv from "dotenv";
import { URL } from "url";
import { readdirSync } from "fs";
import { join } from "node:path";
import { Collection } from "discord.js";

dotenv.config();
const token = process.env.token;
const clientId = process.env.clientId;
const guildId = process.env.guildId;

// const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;
const __commanddir = new URL("./commands", import.meta.url).pathname;
const commandFiles = readdirSync(__commanddir).filter((file) =>
  file.endsWith(".js")
);

const commands = new Collection();

for (const file of commandFiles) {
  const commandPath = join(__commanddir, file);
  const command = await import(commandPath);
  if (!command) {
    console.log("При загрузке комманды " + file + " возникла ошибка.");
    continue;
  }

  // console.log(command.data);
  // console.log(command.execute);

  if ("data" in command && "execute" in command) {
    commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${commandPath} is missing a required "data" or "execute" property.`
    );
  }
}
export const conf = {
  token,
  clientId,
  guildId,
  __dirname,
  __commanddir,
  commands,
};
