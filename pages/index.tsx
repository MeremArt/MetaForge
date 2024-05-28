import React from "react";
import AutoPlaySlide from "../components/AutoSlider";
import AutoPlaySlide2 from "../components/AutoSlider2";
const Index = () => {
  const [displayRequirements, setDisplayRequirements] = React.useState(false);

  return (
    <main className="overflow-hidden">
      <section className="background-section ">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <div>
            <h2 className="text-white text-5xl font-bold font-geist ">
              <span className="mb-4">YOUR FAVOURITE BRANDS </span> <br />{" "}
              BROUGHT ON-CHAIN
            </h2>
          </div>
          <div className="mt-8">
            <p className="text-[#c2c2cccb] font-geist">
              Explore gift cards, cNFTs and assets from the brands you love.
              <br /> All on Solana.
            </p>
          </div>
          <div className="mt-6">
            <button className="gradient-button gap-2 rounded-xl">
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
          <section className="mt-10 ">
            <AutoPlaySlide />
            <AutoPlaySlide2 />
          </section>
        </center>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="mt-64">
        <center>
          <div>
            <h2 className="text-white text-4xl font-bold font-geist ">
              <span className="mb-4">
                EXCHANGE REDBULL & COCA-COLA ONCHAIN{" "}
              </span>{" "}
              <br /> FOR REAL VALUE
            </h2>
          </div>
          <div className="mt-8">
            <p className="text-[#c2c2cccb] font-geist">
              Gift your friends some Redbull and Coca-Cola gift cards on-chain
              and have them <br />
              claim the real world value. Other brands coming soon. All on
              Solana.
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 mt-8">
            <div>
              <button className="bg-[#FCFCFD] btn text-[#0C111D] py-4 px-4 rounded-xl font-geist ">
                MINT COCA-COLA
              </button>
            </div>
            <div>
              <button className="bg-[#FCFCFD] btn text-[#0C111D] py-4 px-4 rounded-xl font-geist ">
                MINT REDBULL
              </button>
            </div>
          </div>
          <section className="">
            <div className="items-center justify-center ">
              <div>
                <img
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716856736/Group_56_syjzaq.png"
                  alt="image"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105 "
                />
              </div>
              {/* <div>
                <img
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716856022/Group_55_xbnwkt.png"
                  alt="image"
                  className="bg-none transition-transform duration-300 ease-in-out transform hover:scale-105 "
                />
              </div> */}
            </div>
          </section>
        </center>
        <br />
        <br />
        <br />
      </section>
    </main>
  );
};

export default Index;