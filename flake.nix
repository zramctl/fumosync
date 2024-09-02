{
  description = "Stardust";
  inputs = {
    nixpkgs = {
      url = "github:NixOS/nixpkgs/nixos-unstable";
    };
    flake-utils = {
      url = "github:numtide/flake-utils";
    };
  };
  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = { };
        };
      in
      {
        devShells.default = pkgs.mkShell
          {
            packages = with pkgs; [
              nodejs_latest # NodeJS runtime + NPM
              nodePackages_latest.pnpm # PNPM package manager
            ];
          };
        packages.default = pkgs.stdenv.mkDerivation rec {
          name = pname;
          pname = "fumosync";

          src = ./.;

          pnpmDeps = pkgs.pnpm.fetchDeps {
            inherit pname src;
            hash = "sha256-lESYZAqflMNKR5yvNA6drDYe6rK2YQQjiQNZ/TVsjvs=";
          };

          nativeBuildInputs = with pkgs; [
            nodejs
            pnpm.configHook
          ];

          buildInputs = with pkgs; [
            nodejs
            pnpm
          ];

          buildPhase = ''
            pnpm build
            mkdir $out
            cp dist/* $out
          '';

          installPhase = ''
            mkdir -p $out/bin
            mkdir -p $out/share
            cp -r * $out/share
            
            echo "#!/usr/bin/env node" > $out/bin/${pname}
            cat dist/index.js >> $out/bin/${pname}

            chmod +777 $out/bin/${pname}
          '';
        };
      }
    );
}
