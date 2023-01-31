import { REST, Routes } from "discord.js";
import { conf } from "./config";

const rest = new REST({ version: "10" }).setToken(conf.token);

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands(conf.guildId), {
            body: conf.commands,
        });

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
})();
