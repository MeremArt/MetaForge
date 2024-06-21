"useclient";
import React, { useCallback, useState } from "react";
import * as anchor from "@coral-xyz/anchor";
import styles from "./styles.module.css";
import * as web3 from "@solana/web3.js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import {
  Keypair,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

import { MPL_BUBBLEGUM_PROGRAM_ID } from "@metaplex-foundation/mpl-bubblegum";
import {
  SPL_NOOP_PROGRAM_ID,
  SPL_ACCOUNT_COMPRESSION_PROGRAM_ID,
} from "@solana/spl-account-compression";
import Success from "./Success";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const RedModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const { publicKey, wallet, signTransaction, sendTransaction } = useWallet();
  const handleMint = () => {
    if (!publicKey) {
      alert("Please connect your wallet to mint.");
      return;
    }
    console.log("Minting...");
    setIsSuccessOpen(true);
  };

  const handleSuccessClose = () => {
    setIsSuccessOpen(false);
  };

  const { connection } = useConnection();

  const walletAddress = publicKey ? publicKey.toBase58() : "";

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  const formatAddress = (address: string | undefined) => {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "";
  };

  const currentDate = formatDate(new Date());

  const mintNft = useCallback(async () => {
    if (!publicKey || !wallet) {
      console.log("Wallet not connected");
      return;
    }

    try {
      const programId = new PublicKey(
        "23UbaEAHYvXWG3Af7BeVVsSDHfS3HcxHiWqSGrZR7S86"
      );

      const asset = new PublicKey(
        "9jcPQz32ZnzH3x861wXVnRPKv4wWqBJTo7XYPzFf8FUt"
      );
      const merkleTreeSecret = [
        233, 76, 207, 113, 59, 217, 235, 251, 77, 135, 3, 180, 171, 163, 93,
        237, 210, 187, 59, 74, 185, 7, 58, 11, 133, 12, 198, 30, 151, 131, 218,
        183, 170, 241, 236, 60, 160, 189, 98, 213, 44, 113, 2, 204, 8, 46, 100,
        72, 151, 59, 64, 77, 64, 110, 69, 7, 9, 108, 191, 36, 28, 147, 221, 8,
      ];
      const merkleTreeKeypair = Keypair.fromSecretKey(
        new Uint8Array(merkleTreeSecret)
      );
      const merkleTree = merkleTreeKeypair.publicKey;

      const [treeConfig] = PublicKey.findProgramAddressSync(
        [merkleTree.toBuffer()],
        new PublicKey(MPL_BUBBLEGUM_PROGRAM_ID)
      );

      const [treeOwner] = PublicKey.findProgramAddressSync(
        [anchor.utils.bytes.utf8.encode("tree_owner"), merkleTree.toBuffer()],
        programId
      );

      const mintCnftInstruction = new TransactionInstruction({
        keys: [
          { pubkey: publicKey, isSigner: true, isWritable: true },
          { pubkey: asset, isSigner: false, isWritable: false },
          { pubkey: treeConfig, isSigner: false, isWritable: true },
          { pubkey: merkleTree, isSigner: false, isWritable: true },
          { pubkey: treeOwner, isSigner: false, isWritable: true },
          { pubkey: publicKey, isSigner: false, isWritable: true },
          {
            pubkey: new PublicKey(MPL_BUBBLEGUM_PROGRAM_ID),
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: new PublicKey(SPL_NOOP_PROGRAM_ID),
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: new PublicKey(SPL_ACCOUNT_COMPRESSION_PROGRAM_ID),
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: anchor.web3.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
          },
        ],
        programId,
        data: Buffer.from(anchor.utils.bytes.utf8.encode("COLA")),
      });

      const transaction = new Transaction().add(mintCnftInstruction);

      // Fetch the latest blockhash
      const latestBlockhash = await connection.getLatestBlockhash("finalized");

      // Set the recent blockhash
      transaction.recentBlockhash = latestBlockhash.blockhash;

      const serializedTransaction = transaction.serialize({
        requireAllSignatures: false,
      });

      const deserializedTransaction = Transaction.from(serializedTransaction);
      const signedTransaction = await (
        deserializedTransaction
      );
      const signature = await sendTransaction(signedTransaction, connection);

      console.log("Transaction Signature", signature);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  }, [publicKey, wallet, connection, signTransaction, sendTransaction]);

  // ... (rest of the component remains the same)

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      )}
      <div
        className={`${styles.modal} ${
          isOpen ? styles.open : ""
        } fixed inset-0 flex items-center justify-center`}
      >
        <div className={styles["modal-content"]}>
          <div className={`rounded-md ${styles["flex-container"]}`}>
            <div className="w-2/5 rounded-l-md linear-background">
              <span className={styles.close} onClick={onClose}>
                Back
              </span>
              <img
                src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1718022126/OXNIVI1_2_1_oxmt9i.png"
                height={280}
                width={280}
              />
            </div>
            <div className="rounded-r-md bg-[#0c111d] w-3/5">
              <div className="flex flex-col items-start px-14 py-10">
                <h2 className="font-geist text-white font-bold text-xl">
                  A CAN OF BONK-BULL
                </h2>
                <p className="text-sm text-[#c2c2cccb] mt-3">
                  You are about to mint a can of Bonk-bull
                </p>
                <hr className="custom-hr mt-5 opacity-20" />
                <div className="flex justify-between w-full mt-4">
                  <div>
                    <h2 className="font-geist mr-10 text-white text-sm">
                      CREATED BY
                    </h2>
                    <p className="flex text-sm text-[#c2c2cccb] mt-3">
                      {formatAddress(walletAddress) || "Connect Wallet"}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-geist text-white text-sm ">
                      DATE CREATED
                    </h2>
                    <p className="flex text-sm text-[#c2c2cccb] mt-3">
                      {currentDate}
                    </p>
                  </div>
                </div>
                <hr className="custom-hr mt-4 opacity-20" />
                <div className="flex flex-col items-start mt-4">
                  <h2 className="font-geist text-white text-sm">PRICE</h2>
                  <p className="text-sm text-[#c2c2cccb]">0.02 SOL</p>
                </div>
                <div className="flex flex-col items-start mt-4">
                  <h2 className="font-geist text-white text-sm">
                    ADDITIONAL INFORMATION
                  </h2>
                  <p className="text-sm text-[#c2c2cccb]">0.02 SOL</p>
                </div>
                <div className="flex items-center justify-center mt-6 w-full">
                  <button
                    onClick={handleMint}
                    className="gradient-button text-center items-center justify-center gap-2 rounded-xl w-full"
                  >
                    MINT
                  </button>
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
      <Success isOpen={isSuccessOpen} onClose={handleSuccessClose} />
    </>
  );
};

export default RedModal;
