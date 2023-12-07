import React from "react";
import img from "./assets/Frame 111.png";

const Workhome = () => {
  // domaian codelinear.com, codelinear.in
  // gmail bussiness plan suit

  return (
    <>
      <div className="work-home mt-20">
        <div className="main-home-work">
          <div className="head-home-work flex justify-center items-center">
            <div className="w-[50%] max-md:w-full h-[168px] max-md:h-full  flex-col justify-center items-center gap-6 inline-flex">
              <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] uppercase leading-none tracking-wide">
                What we do
              </div>
              <div className="w-[511.50px] max-md:w-full text-center text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
                Sed mauris sit facilisis aliquam dictum{" "}
              </div>
            </div>
          </div>
          <div className="main-work flex flex-col justify-center items-center mt-20 max-md:px-4">
            <div className="w[100%] h-full flex-col justify-start items-end gap-12 inline-flex">
              <div className="justify-start items-start gap-[66px] inline-flex">
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                  <div className="text-slate-900 text-[31px] font-normal font-['Manrope'] leading-[34.10px]">
                    Development
                  </div>
                  <div className="w-[354.25px] max-md:w-full max-md:h-full opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                </div>
                <div className="h-[130px] justify-center items-center flex">
                  <img
                    className="w-[610px] max-lg:w-full 16.59px]"
                    src={img}
                    alt=""
                  />
                </div>
              </div>

              <div className="w-[100%] h-[0px] border border-black border-opacity-40"></div>

              <div className="justify-start items-start gap-[66px] inline-flex">
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                  <div className="text-slate-900 text-[31px] font-normal font-['Manrope'] leading-[34.10px]">
                    Acquisition
                  </div>
                  <div className="w-[354.25px] max-md:w-full opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                </div>
                <div className="h-[130px] justify-center items-center flex">
                  <img
                    className="w-[610px] max-lg:w-full 16.59px]"
                    src={img}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[100%] h-[0px] border border-black border-opacity-40"></div>

              <div className="justify-start items-start gap-[66px] inline-flex">
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                  <div className="text-slate-900 text-[31px] font-normal font-['Manrope'] leading-[34.10px]">
                    Construction
                  </div>
                  <div className="w-[354.25px] max-md:w-full  max-md:h-full max-lg:w-full opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                </div>
                <div className="h-[130px] justify-center items-center flex">
                  <img
                    className="w-[610px] max-lg:w-full 16.59px]"
                    src={img}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[100%] h-[0px] border border-black border-opacity-40"></div>

              <div className="justify-start items-start gap-[66px] inline-flex">
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                  <div className="text-slate-900 text-[31px] font-normal font-['Manrope'] leading-[34.10px]">
                    Commercial
                  </div>
                  <div className="w-[354.25px] max-md:w-full max-md:h-full max-lg:w-full opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                </div>
                <div className="h-[130px] justify-center items-center flex">
                  <img
                    className="w-[610px] max-lg:w-full 16.59px]"
                    src={img}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[1028.67px] max-lg:w-full h-[0px] border border-black border-opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workhome;
