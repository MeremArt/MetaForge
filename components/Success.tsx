import React from "react";
import styles from "./styles.module.css";

interface SuccessProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Success: React.FC<SuccessProps> = ({ isOpen, onClose, children }) => {
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
          <div className="rounded-2xl ml-20  bg-[#292929] w-9/12">
            <div className="flex flex-col items-center px-14 py-10 ">
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6.5"
                  y="6.5"
                  width="52"
                  height="52"
                  rx="26"
                  fill="url(#paint0_linear_266_2477)"
                />
                <rect
                  x="3.5"
                  y="3.5"
                  width="58"
                  height="58"
                  rx="29"
                  stroke="white"
                  stroke-opacity="0.15"
                  stroke-width="6"
                />
                <path
                  d="M45.8332 22.5L27.4998 40.8333L19.1665 32.5"
                  stroke="#FCFCFD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_266_2477"
                    x1="32.6313"
                    y1="6.5"
                    x2="32.6313"
                    y2="58.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FF7D" />
                    <stop offset="1" stop-color="#009B4C" />
                  </linearGradient>
                </defs>
              </svg>
              <br />
              <h2 className="flex  font-geist  text-white font-bold text-xl">
                MINT SUCCESSFULLY COMPLETED
              </h2>
              <p className="text-sm text-[#c2c2cccb] mt-3">
                Your cNFT has been added to your wallet
              </p>
              <div className="flex items-center justify-center mt-6 w-full">
                <button
                  onClick={onClose}
                  className="gradient-button text-center items-center justify-center gap-2 rounded-xl w-full"
                >
                  Close
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
