import dotenv from "dotenv";
import { URL } from "url";
import { readdirSync } from "fs";
import { join } from "node:path";
import { Collection } from "discord.js";

dotenv.config();
const token = process.env.token;
const clientId = process.env.clientId;
const guildId = process.env.guildId;
const aitoken = process.env.aitoken;

const __dirname = new URL(".", import.meta.url).pathname;
const commanddir = new URL("./commands", import.meta.url).pathname;
const commandfiles = readdirSync(commanddir).filter((file) =>
  file.endsWith(".js")
);

const commands = new Collection();

for (const file of commandfiles) {
  const commandfile = join(commanddir, file);
  const command = await import(commandfile);
  if (!command) {
    console.log(`При загрузке комманды ${file} возникла ошибка.`);
    continue;
  }

  if ("data" in command && "execute" in command) {
    commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${commandfile} is missing a required "data" or "execute" property.`
    );
  }
}

const events = [];
const eventdir = new URL("./events", import.meta.url).pathname;
const eventfiles = readdirSync(eventdir).filter((file) => file.endsWith(".js"));

for (const file of eventfiles) {
  const eventfile = join(eventdir, file);
  const event = await import(eventfile);

  if (!event) {
    console.log(`При загрузке события ${file} возникла ошибка.`);
    continue;
  }

  if ("name" in event && "execute" in event) {
    events.push(event.name, event);
  }
}

export const conf = {
  token,
  aitoken,
  clientId,
  guildId,
  __dirname,
  __commanddir: commanddir,
  commands,
  events,
};
