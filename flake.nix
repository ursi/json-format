{
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem
      (system:
        with nixpkgs.legacyPackages.${system};

        {
          defaultPackage = stdenv.mkDerivation {
              pname = "json-format";
              version = "0.1.0";
              buildInputs = [ nodejs ];
              dontUnpack = true;
              js = ./index.js;

              installPhase = ''
                mkdir -p $out/bin
                local ex=$out/bin/json-format
                cp $js $ex
                chmod +x $ex
              '';
            };
        }
      );
}
