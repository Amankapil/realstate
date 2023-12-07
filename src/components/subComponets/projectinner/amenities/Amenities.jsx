import React from "react";
import ac from "./assets/ac.svg";
import bed from "./assets/bed.svg";
import door from "./assets/door.svg";
import dryer from "./assets/dryer.svg";
import ex from "./assets/ex.svg";
import fire from "./assets/fire.svg";
import fork from "./assets/fork.svg";
import heater from "./assets/heater.svg";
import kit from "./assets/kit.svg";
import kitchen from "./assets/kitchen.svg";
import men from "./assets/men.svg";
import office from "./assets/office.svg";
import wifi from "./assets/wifi.svg";
import stick from "./assets/stick.svg";
import tub from "./assets/tub.svg";
import tv from "./assets/tv.svg";
import wave from "./assets/vawe.svg";
import view from "./assets/view.svg";
import washing from "./assets/washing.svg";
import water from "./assets/water.svg";


const Amenities = () => {
  return (
    <>
      <div className="amenities my-20">
        <div className="main-amenities">
          <div className="w-full h-full relative bg-white flex justify-center items-start gap-[90px] px-[100px] flex-wrap  max-md:px-4">
            <div>
              <div className="left-[100px] top-[125.75px]  flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] uppercase leading-none tracking-wide">
                  amenities
                </div>
                <div className="w-[] text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
                  Sed mauris sit{" "}
                </div>
              </div>
            </div>
            <div>
              <div className="w-[820px]  max-md:w-full  max-md:justify-center  justify-start items-start gap-9 inline-flex flex-wrap">
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                  <img className="w-8 h-8 relative" src={men} alt="" />
                  <div className="text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[14.57px]">
                    Sleeps 9
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                  <img className="w-8 h-8 relative" src={wave} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    creek on property
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                  <img className="w-8 h-8 relative" src={kitchen} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    Thor Kitchen Appliances
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                  <img className="w-8 h-8 relative" src={washing} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    Washing machine
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={door} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[14.57px]">
                    4 bedrooms
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={water} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[14.57px]">
                    Hot water
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={ac} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    Air conditioning
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={dryer} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    Dryer
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={bed} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[14.57px]">
                    6 beds
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={stick} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    Extra pillows and blankets
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={heater} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    Indoor Fireplace
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={fire} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    fire ring
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={tub} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[14.57px]">
                    2 bathrooms
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={office} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    Dedicated workplace
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={wifi} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    WIFI
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={kit} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    First aid kit
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={view} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[14.57px]">
                    Mountain View
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={fork} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    Dishes & Silverware
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={tv} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    TV
                  </div>
                </div>
                <div className="w-[133px] flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-8 h-8 relative" src={ex} alt="" />
                  <div className="self-stretch text-center text-neutral-900 text-sm font-normal font-['Be Vietnam'] capitalize leading-[18.20px]">
                    Fire extinguisher
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
