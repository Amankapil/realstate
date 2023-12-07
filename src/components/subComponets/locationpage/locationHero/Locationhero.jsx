import React from "react";
import "./locationhero.scss";

const Locationhero = () => {
  return (
    <div className="location-hero pt-32">
      <div className="main-location">
        <div className="flex head-location px-[150px] max-lg:px-[20px] justify-between max-md:flex-wrap max-md:gap-[30px]" >
          <h1 className="w-[439.64px] max-md:w-full text-slate-900 text-[61px] font-normal font-['Manrope'] leading-[73.20px]">
            Find a home in a city near you.
          </h1>
          <div className="w-[400px] max-md:w-full opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
            With a focus on craftsmanship and personalisation, we flipped the
            mass model on its head and offered people the rare opportunity to
            create a home that would not only serve them but also inspire them.
          </div>
        </div>

        <div className="cities mt-40">
          <div className="w-full h-full max-md:px-[20px] px-[100px] justify-start items-start gap-[19px] inline-flex flex-wrap max-xl:justify-center max-xl:px-8">
            <div className=" location-card flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-[400px] max-md:w-full h-[376px] justify-center items-center inline-flex">
                <img
                  className="w-[400px] h-[376px]"
                  src="https://via.placeholder.com/400x376"
                  alt=""
                />
              </div>
              <div className="w-[399.56px] max-md:w-full justify-between items-center inline-flex">
                <div className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                  New York City
                </div>
                <div className="w-[66.94px] h-[66.94px] relative">
                  <div className=" opening-btn w-[66.94px] h-[66.94px] left-[-0px] top-[-10px] absolute bg-stone-50 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className=" location-card flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-[400px] max-md:w-full h-[376px] justify-center items-center inline-flex">
                <img
                  className="w-[400px] h-[376px]"
                  src="https://via.placeholder.com/400x376"
                  alt=""
                />
              </div>
              <div className="w-[399.56px] max-md:w-full justify-between items-center inline-flex">
                <div className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                  Chicago
                </div>
                <div className="w-[66.94px] h-[66.94px] relative">
                  <div className=" opening-btn w-[66.94px] h-[66.94px] left-[-0px] top-[-10px] absolute bg-stone-50 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className=" location-card flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-[400px] max-md:w-full h-[376px] justify-center items-center inline-flex">
                <img
                  className="w-[400px] max-md:w-full h-[376px]"
                  src="https://via.placeholder.com/400x376"
                  alt=""
                />
              </div>
              <div className="w-[399.56px] max-md:w-full justify-between items-center inline-flex">
                <div className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                  San Francisco
                </div>
                <div className="w-[66.94px] h-[66.94px] relative">
                  <div className=" opening-btn w-[66.94px] h-[66.94px] left-[-0px] top-[-10px] absolute bg-stone-50 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className=" location-card flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-[400px] max-md:w-full h-[376px] justify-center items-center inline-flex">
                <img
                  className="w-[400px]  max-md:w-full h-[376px]"
                  src="https://via.placeholder.com/400x376"
                  alt=""
                />
              </div>
              <div className="w-[399.56px] max-md:w-full justify-between items-center inline-flex">
                <div className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                  Seattle
                </div>
                <div className="w-[66.94px] h-[66.94px] relative">
                  <div className=" opening-btn w-[66.94px] h-[66.94px] left-[-0px] top-[-10px] absolute bg-stone-50 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className=" location-card flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-[400px] max-md:w-full h-[376px] justify-center items-center inline-flex">
                <img
                  className="w-[400px] max-md:w-full h-[376px]"
                  src="https://via.placeholder.com/400x376"
                  alt=""
                />
              </div>
              <div className="w-[399.56px] max-md:w-full justify-between items-center inline-flex">
                <div className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                  Sacramento
                </div>
                <div className="w-[66.94px] h-[66.94px] relative">
                  <div className=" opening-btn w-[66.94px] h-[66.94px] left-[-0px] top-[-10px] absolute bg-stone-50 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className=" location-card flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-[400px] max-md:w-full  h-[376px] justify-center items-center inline-flex">
                <img
                  className="w-[400px] max-md:w-full h-[376px]"
                  src="https://via.placeholder.com/400x376"
                  alt=""
                />
              </div>
              <div className="w-[399.56px]  max-md:w-full justify-between items-center inline-flex">
                <div className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                  Austin
                </div>
                <div className="w-[66.94px] h-[66.94px] relative">
                  <div className=" opening-btn w-[66.94px] h-[66.94px] left-[-0px] top-[-10px] absolute bg-stone-50 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locationhero;
