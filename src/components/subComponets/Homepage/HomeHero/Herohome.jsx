import React, { useEffect, useState } from "react";
import "./homehero.scss";
import msg from "./assets/msg.svg";
import msgg from "./assets/msgg.svg";
import search from "./assets/search.svg";

const Herohome = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [hundred, setHundred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHundred(true);
        console.log(window.scrollY);
      } else {
        setHundred(false);
        // console.log(window.scrollY);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // useEffect(() => {
  //   if (height > 700) {
  //     setHundred(true);
  //   }
  // }, [height]);

  return (
    <div className="home-hero h-[634px] flex justify-center items-center">
      <div className="main-hero flex flex-col justify-center items-center">
        <h1 className="w-[679.43px] max-sm:w-full text-center text-white text-[49px] font-normal font-['Manrope'] leading-[58.80px]">
          Handcrafted homes made of art, heart and nature
        </h1>
        <div className="input-hero mt-10 relative">
          <input
            type="text"
            className="w-[610px] max-sm:w-full h-[49px] pl-[36.49px] pr-6 py-[14.50px] bg-white rounded-[5px] justify-end items-start gap-[274.51px] inline-flex"
            placeholder="Search by City, Zip, No. of Bedrooms etc"
          />

          <div className="search-icon absolute right-3 top-4">
            <img src={search} alt="" />
          </div>
        </div>
      </div>

      {hundred ? (
        <>
          <div className="w-[50.10px] h-[50.10px] fixed right-10 bottom-6 z-[99999999]">
            <div className="w-[50.10px] h-[50.10px] left-0 top-0 absolute bg-blue-800 rounded-full" />
            <img
              className="w-6 h-6 left-[13.05px] top-[13.05px] absolute"
              src={msgg}
              alt=""
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-[50.10px] h-[50.10px] fixed right-10 bottom-6 z-[99999999]">
            <div className="w-[50.10px] h-[50.10px] left-0 top-0 absolute bg-white rounded-full" />
            {/* <div className="w-6 h-6 left-[13.05px] top-[13.05px] absolute" /> */}
            <img
              className="w-6 h-6 left-[13.05px] top-[13.05px] absolute"
              src={msg}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Herohome;
