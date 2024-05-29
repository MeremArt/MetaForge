import React from "react";
import Countdown from "./countdown";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const XClick = () => {
    window.location.href = "https://x.com/MTFG_Protocol";
  };
  return (
    <main className=" ">
      <section className="footer-background-section mx-auto px-8  top-0 w-full z-50 ">
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
        <br />
        <div className="container mx-auto flex justify-between items-center ">
          <div>
            <Countdown />
          </div>
          <div>
            <div className="">
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
          </div>
        </div>
        <hr className="text-white text-sm mt-5" />

        <div className="flex items-center justify-between mt-8">
          <div className="text-white font-geist ">
            {" "}
            ©️ {currentYear} Metaforge
          </div>
          <div>
            <h2 className="text-4xl text-white font-bold font-geist">
              METAFORGE
            </h2>
          </div>
          <div className="flex">
            <button
              onClick={XClick}
              className="flex items-center gap-2 text-white "
            >
              Follow us on{" "}
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2399 0.000732422H16.9538L11.0246 6.77748L17.9999 15.9991H12.5383L8.26057 10.4062L3.36591 15.9991H0.650268L6.99222 8.75061L0.300781 0.000732422H5.90099L9.76768 5.11284L14.2399 0.000732422ZM13.2874 14.3746H14.7912L5.0839 1.53985H3.47009L13.2874 14.3746Z"
                  fill="#FCFCFD"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
