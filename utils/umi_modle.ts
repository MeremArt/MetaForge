import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplBubblegum } from "@metaplex-foundation/mpl-bubblegum";
import { loadWalletKey } from "./load_wallet_key";
import {
  createSignerFromKeypair,
  keypairIdentity,
} from "@metaplex-foundation/umi";
import { web3JsEddsa } from "@metaplex-foundation/umi-eddsa-web3js";
import { web3JsRpc } from "@metaplex-foundation/umi-rpc-web3js";
import { fetchHttp } from "@metaplex-foundation/umi-http-fetch";
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";

const wallet = loadWalletKey();
const umi = createUmi("https://api.devnet.solana.com")
  .use(web3JsEddsa())
  .use(web3JsRpc("https://api.devnet.solana.com", { httpAgent: false }))
  .use(fetchHttp())
  .use(mplCandyMachine())
  .use(mplBubblegum());

const keypair = umi.eddsa.createKeypairFromSecretKey(wallet.secretKey);
const myKeypairSigner = createSignerFromKeypair(umi, keypair);
umi.use(keypairIdentity(keypair));

export { umi };
