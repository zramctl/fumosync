import { Client, Script } from "./lib/fumosclub";
import fs from "node:fs";
import { info } from "./lib/logger";

export function sync(client: Client, script: string) {
  if (!fs.existsSync("./src")) return;

  let data: Script = {
    description: "",
    source: {
      main: "",
      modules: {},
    },
  };

  fs.readdirSync("./src").forEach((file) => {
    if (file == "init.lua") {
      const read = fs.readFileSync(`./src/${file}`, "utf-8");

      data.source.main = read;
    } else {
      const read = fs.readFileSync(`./src/${file}`, "utf-8");

      data.source.modules[file.replace(".lua", "")] = read;
    }
  });

  client.save(script, data).then((res) => {
    info("Synced successfully!");
  });
}
