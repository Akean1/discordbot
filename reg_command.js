import { REST, Routes } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const rest = new REST({ version: "10" }).setToken(process.env.token);

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
})();
