"use client";
import React, { useState } from "react";
import AutoPlaySlide from "../components/AutoSlider";
import AutoPlaySlide2 from "../components/AutoSlider2";
import Modal from "../components/cokeModal";
import RedModal from "../components/redBullmodal";
import * as anchor from "@coral-xyz/anchor";
import { AnchorProvider, Program, Wallet, web3 } from "@coral-xyz/anchor";
import { BbNft, IDL } from "../target/types/bb_nft";
import {
  SPL_ACCOUNT_COMPRESSION_PROGRAM_ID,
  SPL_NOOP_PROGRAM_ID,
} from "@solana/spl-account-compression";
import { PublicKey } from "@solana/web3.js";
import {
  findTreeConfigPda,
  MPL_BUBBLEGUM_PROGRAM_ID,
} from "@metaplex-foundation/mpl-bubblegum";
import {
  keypairFromSecret,
  keypairSignerFromSecret,
  loadWalletKey,
} from "../utils";
import {
  KeypairSigner,
  publicKey as umiPublicKey,
} from "@metaplex-foundation/umi";
const Index = () => {
  const [displayRequirements, setDisplayRequirements] = React.useState(false);

  const partners = [
    {
      src: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716935885/image_5_qtbjdo.png",
      alt: "Partner 1",
    },
    {
      src: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716936145/solanaLogo_1_re5mzz.png",
      alt: "Partner 2",
    },
    {
      src: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717603483/Frame_140_2_aknncv.png",
      alt: "Partner 3",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRedModalOpen, setIsRedModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const redOpenModal = () => {
    setIsRedModalOpen(true);
  };

  const redCloseModal = () => {
    setIsRedModalOpen(false);
  };
  const scrollToTarget = () => {
    const targetElement = document.getElementById("target");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="overflow-hidden">
      <section className="background-section mb-72">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="">
          <div className="text-center">
            <h2 className="text-white text-5xl font-bold font-geist ">
              ISSUE. MINT. SHARE. REDEEM
            </h2>
          </div>
          <section className="">
            <div className="text-center mt-8 ">
              <p className="text-[#c2c2cccb] ">
                MetaForge iNFTs empowers brands and creators to build <br />
                deeper connections with their customers and communities
                on-chain.
              </p>
            </div>
          </section>

          <div className="flex items-center justify-center mt-8">
            <button
              onClick={scrollToTarget}
              className="gradient-button gap-2 rounded-xl"
            >
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8248 9.67524L4.94059 17.5594M5.79145 11.8375L1.92965 10.9253C1.50478 10.825 1.35535 10.2975 1.66313 9.9886L4.73428 6.91745C4.94059 6.71115 5.22049 6.59294 5.51378 6.59071L8.97635 6.5606M13.3377 2.59844C15.9149 4.35593 18.1441 6.58513 19.9016 9.16227M10.6614 16.7086L11.5736 20.5704C11.6739 20.9952 12.2014 21.1447 12.5103 20.8369L15.5814 17.7657C15.7878 17.5594 15.906 17.2795 15.9082 16.9862L15.9383 13.5237M20.5629 7.35013L21.4639 3.01439C21.7093 1.83455 20.6655 0.79076 19.4856 1.0361L15.1499 1.93715C13.873 2.20255 12.7021 2.83485 11.781 3.75709L8.22362 7.31333C6.86647 8.67048 5.98326 10.4302 5.70447 12.3293L5.69221 12.4107C5.51601 13.6229 5.92193 14.8462 6.78729 15.7127C7.65266 16.5781 8.8771 16.984 10.0893 16.8067L10.1707 16.7944C12.0698 16.5168 13.8295 15.6324 15.1867 14.2753L18.7429 10.719C19.6652 9.79791 20.2975 8.62699 20.5629 7.35013Z"
                  stroke="#FCFCFD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              START MINTING
            </button>
          </div>
          <section className="mt-20  ">
            <AutoPlaySlide />
            <AutoPlaySlide2 />
          </section>
        </div>
      </section>
      <br />
      <br />

      <section className="mt-72">
        <br />
        <br />
        <br />
        <br />

        <div className="center">
          <div className="mb-20 text-white text-3xl font-bold font-geist ">
            <h2>OUR PARTNERS</h2>
            <div className="flex items-center justify-center gap-10 mt-10 ">
              {partners.map((partner, index) => (
                <div key={index}>
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    height={150}
                    width={150}
                  />
                </div>
              ))}
            </div>
          </div>

          <section className="">
            <div className="items-center justify-center ">
              <div>
                <img
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1718023046/Graphic_fnqpmc.png"
                  alt="image"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105 "
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </section>
          <section className="mt-5">
            <div id="target">
              <h2 className="text-white text-4xl font-bold font-geist ">
                BRING YOUR FAVOURITE BRANDS ON-CHAIN
              </h2>
            </div>
            <div className="mt-8">
              <p className="text-[#c2c2cccb] ">
                Gift your friends some Redbull and Coca-Cola gift cards on-chain
                and have them <br />
                claim the real world value. Other brands coming soon. All on
                Solana.
              </p>
            </div>
            <div className="flex justify-center items-center gap-5 mt-8">
              <div>
                <button
                  onClick={openModal}
                  className="bg-[#FCFCFD] btn text-[#0C111D] py-4 px-4 rounded-xl font-geist "
                >
                  MINT COCA-COLA
                </button>

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <section className="justify-center mt-8  items-center w-full ">
                    <div className="flex">
                      <div className="linear-background w-1/2"></div>
                      <div className="w-1/2 bg-slate-50"></div>
                    </div>
                  </section>
                </Modal>
              </div>
              <div>
                <button
                  onClick={redOpenModal}
                  className="bg-[#FCFCFD] btn text-[#0C111D] py-4 px-4 rounded-xl font-geist "
                >
                  MINT REDBULL
                </button>
                <RedModal isOpen={isRedModalOpen} onClose={redCloseModal}>
                  <section className="justify-center mt-8  items-center w-full ">
                    <div className="flex">
                      <div className="linear-background w-1/2"></div>
                      <div className="w-1/2 bg-slate-50"></div>
                    </div>
                  </section>
                </RedModal>
              </div>
            </div>
          </section>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <div className="center mt-52">
        <section className=" INFTs-background-section rounded-xl">
          <h2 className="flex font-geist text-white font-bold text-xl">
            iNFTs - the future of compressed NFTs
          </h2>
          <p className="flex text-left mt-4 text-sm text-[#c2c2cccb]">
            Compressed NFTs are built on the Solana blockchain and <br /> allow
            for the creation, distribution & management of NFTs <br /> in a cost
            efficient manner. SPL tokens + cNFTs = iNFTs
          </p>
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717106363/Frame_130_1_dpxl0e.png"
            alt="image"
            height={500}
            width={500}
            className="mt-5"
          />
        </section>
      </div>
    </main>
  );
};

export default Index;
