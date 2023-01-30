import { URL } from "url";
import fs from "fs";

const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;
const __commandDir = new URL("./commands", import.meta.url).pathname;
console.log(__filename);
console.log(__dirname);
console.log(__commandDir);

const commands = fs.readdirSync(__commandDir);
console.log(commands);
