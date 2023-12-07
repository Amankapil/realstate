import React from "react";
import sky from "./assets/sy.svg";
import leafe from "./assets/leafe.svg";
import blue from "./assets/sky.svg";

const Joinus = () => {
  return (
    <>
      <div className="joinus mt-20 overflow-hidden">
        <div className="main-joinus">
          <div>
            <div className="w-full h-[990px] relative bg-stone-50">
              <div className="head-join pl-[100px] max-md:p-[20px] max-md:w-[80%]">
                <div className="w-[634.86px] max-md:w-full h-full flex-col justify-start items-start gap-9 inline-flex">
                  <div className="flex-col justify-start items-start gap-5 flex  max-md:w-[96%]">
                    <div className="flex-col justify-start items-start gap-6 flex">
                      <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] uppercase leading-none tracking-wide">
                        What we’re looking for
                      </div>
                      <div className="w-[634.86px] max-md:w-full text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
                        What we’re looking for
                      </div>
                    </div>
                    <div className="w-[400px] opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal max-md:w-[96%]">
                      With a focus on craftsmanship and personalisation, we
                      flipped the mass model on its head and offered people the
                      rare opportunity to create a home that would not only
                      serve them but also inspire them.
                    </div>
                  </div>
                  <button className="px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-base font-medium font-['Manrope'] leading-tight">
                      Join us
                    </div>
                  </button>
                </div>
              </div>
              <div className="max-md:hidden">
                <img
                  className="w-[322.19px] h-[215.09px] left-[776.58px] top-[255.61px] absolute origin-top-left rotate-[-10.56deg]"
                  src="https://via.placeholder.com/322x215"
                  alt=""
                />
                <img
                  className="left-[339.58px] top-[655.61px] absolute origin-top-left rotate-[-10.56deg]"
                  src={sky}
                  alt=""
                />
                <img
                  className="left-[839.58px] top-[500.61px] absolute origin-top-left rotate-[-10.56deg]"
                  src={leafe}
                  alt=""
                />
                <img
                  className="left-[1090.58px] top-[100.61px] absolute origin-top-left rotate-[10.56deg] z-10"
                  src={blue}
                  alt=""
                />
                <img
                  className="w-[337.75px] h-[225.17px] left-[1200.62px] top-[309.73px] absolute origin-top-left rotate-[-6.53deg]"
                  src="https://via.placeholder.com/338x225"
                  alt=""
                />
                <img
                  className="w-[261.49px] h-[391.50px] left-[510.70px] top-[535.60px] absolute origin-top-left rotate-[-6.53deg]"
                  src="https://via.placeholder.com/261x392"
                  alt=""
                />
                <img
                  className="w-[250.05px] h-[234.89px] left-[69.69px] top-[627.49px] absolute origin-top-left rotate-[-6.53deg]"
                  src="https://via.placeholder.com/250x235"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinus;
