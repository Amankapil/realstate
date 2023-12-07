import React from "react";

const Abouthome = () => {
  return (
    <div className="about-home">
      <div className="main-about-home">
        <div className="w-full h-[592px] max-lg:h-full max-md:my-12 relative bg-white flex justify-start  items-center gap-48 flex-wrap max-xl:justify-center max-md:px-4 max-xl:pt-20">
          <div className="left-about">
            <div className="ml-[100px] w-[610px] max-md:w-full max-lg:ml-3 top-[68.25px]  flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide">
                ABOUT US
              </div>
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="w-[610px] text-neutral-800 text-[31px] font-normal font-['Manrope'] leading-10 max-sm:w-full">
                  Sed mauris sit facilisis aliquam dictum sit in curabitur et.
                  Dictum ligula sagittis morbi.
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <p className="w-[420px]max-md:w-full  opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and offered people the
                    rare opportunity to create a home that would not only serve
                    them but also inspire them.
                  </p>
                  <p className="w-[420px] max-md:w-full opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and offered people the
                    rare opportunity to create a home that would not only serve
                    them but also inspire them.
                  </p>
                </div>
              </div>

              <div className=" projecs-btn  bg-stone-50 rounded-[22px] justify-center items-center gap-4 inline-flex">
                <button className="text-neutral-800 text-base font-medium font-['Manrope'] leading-tight flex justify-center items-center gap-2 px-8 py-4">
                  Read more about us
                  <p></p>
                </button>
              </div>
            </div>
          </div>
          <div className="right-about">
            <img
              className="w[503px] h-[455px] leftpx] top-[68.25px] "
              src="https://via.placeholder.com/503x455"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouthome;
