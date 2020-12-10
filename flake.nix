{
  inputs.utils.url = "github:ursi/flake-utils";

  outputs = { self, nixpkgs, utils }:
    utils.builders.simple-js {
      inherit nixpkgs;
      name = "json-format";
      version = "0.1.0";
      path = ./index.js;
    };
}
