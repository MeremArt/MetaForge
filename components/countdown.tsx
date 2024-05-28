import React, { useEffect, useState } from "react";

const Countdown = () => {
  // Set initial time to 23 days in milliseconds
  const initialTime = 23 * 24 * 60 * 60 * 1000;

  // State to hold the remaining time
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  // useEffect to handle the countdown
  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        // If time is up, clear the interval
        if (prevTime <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

  return (
    <div className="">
      <div className="bg-[#344054]  py-2 px-2 w-36 mb-4 rounded-xl">
        <p className="text-white ">LAUNCHING IN... </p>{" "}
      </div>
      <p className="text-white  font-bold text-4xl">{`${days}D : ${hours}H `}</p>
      <p className="text-[#c2c2cccb] font-geist mt-2">
        Connect a wallet and start minting
      </p>
    </div>
  );
};

export default Countdown;
