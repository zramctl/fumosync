import "dotenv/config";
import { info } from "./lib/logger";
import { Client } from "./lib/fumosclub";
import { init } from "./init";
import { sync } from "./sync";

const session = process.env.SESSION;
const script = process.env.SCRIPT;
const args = process.argv;

const client = new Client(session as string);

client.details().then((res) => info(`Logged in as ${res.name}`));

if (args[2] == "init") {
  init();
}

if (args[2] == "sync") {
  sync(client, script as string);
}
