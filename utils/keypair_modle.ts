import { Keypair } from "@solana/web3.js";
import { umi } from "./umi_modle";
import { createSignerFromKeypair } from "@metaplex-foundation/umi";

export function keypairFromSecret(secret: number[]) {
  return Keypair.fromSecretKey(new Uint8Array(secret));
}

export function keypairSignerFromSecret(secret: number[]) {
  const nftCollectionKeypair = umi.eddsa.createKeypairFromSecretKey(
    new Uint8Array(secret)
  );
  return createSignerFromKeypair(umi, nftCollectionKeypair);
}
