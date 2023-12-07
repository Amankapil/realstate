import React from "react";
import "./inner.scss";
import msg from "./msg.svg";

const ProjectInnerHero = () => {
  return (
    <>
      <div className="home-hero-inner h-[634px] flex justify-start  items-center">
        <div className="main-hero  pl-[100px] max-md:-0 max-md:px-5 flex justify-start  items-start gap-[35px] flex-col">
          <div className="w-[525px] max-md:w-full h-[218px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[525px] max-md:w-full text-white text-[61px]  max-md:text-[40px] font-normal font-['Manrope'] leading-[73.20px]">
              Pursuit of a Radical Rhapsody
            </div>
            <div className="w-[420px]  max-md:w-full text-white text-base font-medium font-['Manrope'] leading-normal">
              With a focus on craftsmanship and personalisation, we flipped the
              mass model on its head and offered people{" "}
            </div>
          </div>

          <button className=" Enquire-btn w-[214px] h-[52px] px-12 py-4 bg-white rounded-[22px] justify-center items-center gap-2 inline-flex">
            <span className="text-blue-900 text-base font-medium font-['Manrope'] leading-tight">
              Enquire now
            </span>
          </button>
        </div>

        <div className="w-[50.10px] h-[50.10px] fixed right-10 bottom-6">
          <div className="w-[50.10px] h-[50.10px] left-0 top-0 absolute bg-white rounded-full" />
          <img
            className="w-6 h-6 left-[13.05px] top-[13.05px] absolute"
            src={msg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ProjectInnerHero;
