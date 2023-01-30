// import path from "node:path";
// import fs from "node:fs";
//
// const p = path.dirname(import.meta.url);
// const compath = path.join(p, "commands");
// const files = fs.readdirSync(compath);
// console.log(files);
//
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
