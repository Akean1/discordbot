import dotenv from "dotenv";

dotenv.config();
const token = process.env.token;
const clientId = process.env.clientId;
const guildId = process.env.serverId;

export const conf = { token, clientId, guildId };
