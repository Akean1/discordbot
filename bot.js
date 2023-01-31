import { Client, Events, GatewayIntentBits } from "discord.js";
import { conf } from "./config.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = conf.commands;

for (const event of conf.events) {
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, async (...args) => event.execute(...args));
  }
}

client.login(conf.token);
