import React from "react";
import styles from "./styles.module.css";
import { useWallet } from "@solana/wallet-adapter-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const { publicKey } = useWallet();
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

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
      <div className={styles["modal-content"]}>
        <div className={`rounded-md ${styles["flex-container"]}`}>
          <div className="w-2/5 rounded-l-md linear-background">
            <span className={styles.close} onClick={onClose}>
              Back
            </span>
            <img
              src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717613355/Frame_146_1_rj3qfe.png"
              height={200}
              width={200}
            />
          </div>
          <div className="rounded-r-md bg-[#0c111d] w-3/5">
            <div className="flex flex-col items-start px-14 py-10">
              <h2 className="font-geist text-white font-bold text-xl">
                A CAN OF COCACOLA
              </h2>
              <p className="text-sm text-[#c2c2cccb] mt-3">
                You are about to mint a can of Coca-Cola
              </p>
              <hr className="custom-hr mt-5 opacity-20" />
              <div className="flex justify-between w-full mt-4">
                <div>
                  <h2 className="font-geist mr-3 text-white text-sm">
                    CREATED BY
                  </h2>
                  <p className="flex  text-sm text-[#c2c2cccb] mt-3">
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
              <div className="flex flex-col items-start mt-4  ">
                <h2 className="font-geist text-white  text-sm">PRICE</h2>
                <p className="text-sm text-[#c2c2cccb] ">0.02 SOL</p>
              </div>
              <div className="flex flex-col items-start mt-4  ">
                <h2 className="font-geist text-white  text-sm">
                  ADDITIONAL INFORMATION
                </h2>
                <p className="text-sm text-[#c2c2cccb] ">0.02 SOL</p>
              </div>
              {/* <div className="flex flex-col items-start mt-4  ">
                <h2 className="font-geist text-white  text-sm">
                  ADDITIONAL INFORMATION
                </h2>
                <p className="text-sm text-[#c2c2cccb] ">0.02 SOL</p>
              </div> */}
              <div className="flex items-center justify-center mt-6 w-full ">
                <button className="gradient-button text-center items-center justify-center gap-2 rounded-xl w-full">
                  MINT
                </button>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
