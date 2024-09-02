import esbuild from "esbuild";
import fs from "node:fs";

const options: esbuild.BuildOptions = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  logLevel: "info",
  minify: true,
  outfile: "dist/index.js",
};

if (process.argv.includes("--watch")) {
  const context = await esbuild.context(options);
  context.watch();
} else {
  await esbuild.build(options);
}
