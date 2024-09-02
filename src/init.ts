import fs from "node:fs";

export function init() {
  // make files
  fs.writeFileSync(
    "./package.json",
    atob(
      "ewogICJuYW1lIjogImZ1bW9zeW5jLXByb2plY3QiLAogICJ2ZXJzaW9uIjogIjEuMC4wIiwKICAiZGVzY3JpcHRpb24iOiAiIiwKICAic2NyaXB0cyI6IHsKICAgICJzeW5jIjogImZ1bW9zeW5jIHN5bmMiCiAgfSwKICAiZGVwZW5kZW5jaWVzIjogewogICAgImZ1bW9zeW5jIjogImh0dHBzOi8vZ2l0aHViLmNvbS96cmFtY3RsL2Z1bW9zeW5jIgogIH0KfQo="
    )
  );

  fs.writeFileSync("./.gitignore", `.env\n`);

  fs.writeFileSync("./.env", atob("U0VTU0lPTj0KU0NSSVBUPQ=="));

  if (fs.existsSync("./src")) return;
  fs.mkdirSync("./src");

  fs.writeFileSync(
    "./src/init.lua",
    atob("bG9jYWwgaGVsbG8gPSByZXF1aXJlTSgiaGVsbG8ubHVhIikKCmhlbGxvKCJ3b3JsZCIp")
  );

  fs.writeFileSync(
    "./src/hello.lua",
    atob(
      "cmV0dXJuIGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpCiAgICBwcmludCgiSGVsbG8gIi4ubmFtZS4uIiEiKQplbmQ="
    )
  );

  if (fs.existsSync("./types")) return;
  fs.mkdirSync("./types");

  fs.writeFileSync(
    "./types/fumos.d.luau",
    atob(
      "ZGVjbGFyZSBsb2Fkc3RyaW5nRW5hYmxlZDogYm9vbGVhbgpkZWNsYXJlIF9WRVJTSU9OOiBzdHJpbmcKCmRlY2xhcmUgb3duZXI6IFBsYXllcgoKZGVjbGFyZSBhcmd1bWVudHM6IGFueQoKZGVjbGFyZSBpc29sYXRlZFN0b3JhZ2U6IHsKICAgIGdldDogKG5hbWU6IHN0cmluZykgLT4gYW55LAogICAgc2V0OiAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55PykgLT4gKCkKfQoKZGVjbGFyZSBpbW1lZGlhdGVTaWduYWxzOiBib29sZWFuCgpkZWNsYXJlIHJlcXVpcmU6IChtb2R1bGU6IE1vZHVsZVNjcmlwdCB8IG51bWJlcikgLT4gYW55CgpkZWNsYXJlIGxvYWRzdHJpbmc6IChzb3VyY2U6IHN0cmluZywgY2h1bmtOYW1lOiBzdHJpbmcpIC0+ICgoKSAtPiBhbnksIHN0cmluZykKCmRlY2xhcmUgTkxTOiAoc291cmNlOiBzdHJpbmcsIHBhcmVudDogSW5zdGFuY2U/KSAtPiBMb2NhbFNjcmlwdAoKZGVjbGFyZSByZXF1aXJlTTogKG1vZHVsZU5hbWU6IHN0cmluZykgLT4gYW55CgpkZWNsYXJlIExvYWRBc3NldHM6IChhc3NldElkOiBudW1iZXIpIC0+IHsKICAgIEdldDogKGFzc2V0OiBzdHJpbmcpIC0+IEluc3RhbmNlLAogICAgRXhpc3RzOiAoYXNzZXQ6IHN0cmluZykgLT4gYm9vbGVhbiwKICAgIEdldE5hbWVzOiAoKSAtPiB7c3RyaW5nfSwKICAgIEdldEFycmF5OiAoKSAtPiB7SW5zdGFuY2V9LAogICAgR2V0RGljdGlvbmFyeTogKCkgLT4ge1tzdHJpbmddOiBJbnN0YW5jZX0KfQ=="
    )
  );

  if (fs.existsSync("./.vscode")) return;

  fs.mkdirSync("./.vscode");

  fs.writeFileSync(
    "./.vscode/settings.json",
    atob(
      "ewogICJsdWF1LWxzcC50eXBlcy5kZWZpbml0aW9uRmlsZXMiOiBbInR5cGVzL2Z1bW9zLmQubHVhdSJdCn0K"
    )
  );
}
