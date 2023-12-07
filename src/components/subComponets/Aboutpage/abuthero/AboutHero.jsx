import React from "react";

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="main-about-hero flex flexcol pl-20 max-md:p-4 gap-20 overflow-hidden pt-20 max-md:flex-wrap">
        <div className="w-[400px] max-md:pl-4 max-md:w-full  max-md:h-full h-[360px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide">
            ABOUT US
          </div>
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="w-[400px] max-md:w-full  text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
              Sed mauris sit facilisis aliquam dictum{" "}
            </div>
            <div className="w-[400px] max-md:w-full  opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
              With a focus on craftsmanship and personalisation, we flipped the
              mass model on its head and offered people the rare opportunity to
              create a home that would not only serve them but also inspire
              them.
            </div>
          </div>
        </div>

        <img
          className="w-full h-full"
          src="https://via.placeholder.com/1012x653"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutHero;
