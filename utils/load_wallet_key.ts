import { web3 } from "@coral-xyz/anchor";
import fs from "fs";

export function loadWalletKey(): web3.Keypair {
  return web3.Keypair.fromSecretKey(
    new Uint8Array(
      JSON.parse(
        fs
          .readFileSync("/Users/matthewchukwuemeka/.config/solana/id.json")
          .toString()
      )
    )
  );
}
