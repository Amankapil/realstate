import React from "react";

const Location = () => {
  return (
    <>
      <div className="location">
        <div className="main-location">
          <div className="w-full h-[675px] relative bg-white flex gap-[90px] justify-center items-center px-[100px]  max-md:px-4  max-lg:h-full flex-w  max-lg:flex-wrap">
            <div>
              <div className="left-[100px] top-[63.50px]  flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] uppercase leading-none tracking-wide">
                  location
                </div>
                <div className="w-[610px]v max-md:w-full text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
                  Sed mauris sit
                </div>
              </div>

              <div className="w-[711px]  max-md:w-full  max-lg:h-full h-[403px] mt-10 left-[104px] top-[208.50px]  justify-center items-center inline-flex">
                <img
                  className="w-[711px] h-[411.84px]  max-md:w-full"
                  alt=""
                  src="https://via.placeholder.com/711x412"
                />
              </div>
            </div>

            <div>
              <div className="left-[940px] top-[208.50px]  flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-800 text-base font-semibold font-['Manrope'] leading-normal">
                  The neighborhood
                </div>
                <div className="w-[400px]  max-md:w-full opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                  With a focus on craftsmanship and personalisation, we flipped
                  the mass model on its head and offered people the rare
                  opportunity to create a home that would not only serve them
                  but also inspire them.
                </div>
              </div>
              <div className="left-[940px] top-[384.50px]  flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-800 text-base font-semibold font-['Manrope'] leading-normal">
                  Sed mauris sit{" "}
                </div>
                <div className="w-[400px] max-md:w-full opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                  With a focus on craftsmanship and personalisation, we flipped
                  the mass model on its head and offered people the rare
                  opportunity to create a home that would not only serve them
                  but also inspire them.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
