import React from "react";

import "./contacthero.scss";
const ContactHero = () => {
  return (
    <div className="contact-hero pt-20">
      <div className="main-contact flex justify-center  items-center">
        <div className="w-full h-[437.31px] max-md:h-full flex-col justify-center items-center gap-9 inline-flex">
          <div className="justify-center items-center gap-[43px] inline-flex max-md:flex-wrap">
            <div className="text-neutral-800 max-md:text-[50px] text-[89px] font-normal font-['Manrope'] leading-[106.80px]">
              A Stunning
            </div>
            <div className="contact-hero-img w-[350.50px] h-28 relative rounded-[59px]" >
              <div className="w-[350.50px] max-md:w-full h-28 left-0 top-0 absolute  " />
              {/* <img
                className="w-[350.50px] h-[213.01px] left-0 top-0 absolute"
                alt=""
                src="https://via.placeholder.com/350x213"
              /> */}
            </div>
          </div>
          <div className="justify-center items-center gap-[43px] inline-flex max-md:flex-wrap">
            <div className="w-[350.50px] max-md:w-full h-28 relative  contact-hero-imge  rounded-[59px]">
              <div className="w-[350.50px] max-md:w-full h-28 left-0 top-0 absolute" />
             
            </div>
            <div className="text-neutral-800 text-[89px] max-md:text-[50px] font-normal font-['Manrope'] leading-[106.80px]">
              Experience
            </div>
          </div>
          <div className="justify-center items-center gap-[43px] inline-flex max-md:flex-wrap">
            <div className="text-neutral-800 text-[89px] max-md:text-[50px] font-normal font-['Manrope'] leading-[106.80px]">
              Awaits you
            </div>
            <div className="contact-hero-imgee w-[141.23px] h-[141.23px] relative rounded-full">
              <div className="w-[141.23px] h-[141.23px] left-0 top-0 absolute rounded-full" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
