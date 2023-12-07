import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./floor.scss";
const Floor = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="floor-plan ml-[100px]  max-lg:ml-0">
        <div className="main-floor-plan">
          <Slider {...settings}>
            <div>
              <div className="w-[400px]  max-md:w-full h-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[53.65px] flex-col justify-center items-center flex">
                  <img
                    className="w-[380.49px] h-[329.96px]"
                    src="https://via.placeholder.com/380x330"
                    alt=""
                  />
                </div>
                <div className="self-stretch h-[138px] flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="w-[400px] text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                      2 Bedroom, Studio apartment
                    </div>
                    <div className="opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                      Studio • 2 bath • 416 sqft
                    </div>
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-neutral-800 text-[31px] font-semibold font-['Manrope'] leading-10">
                      $2,089
                    </div>
                    <div className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
                      <div className="text-white text-base font-medium font-['Manrope'] leading-tight">
                        Enquire now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[400px] max-md:w-full h-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[53.65px] flex-col justify-center items-center flex">
                  <img
                    className="w-[380.49px] h-[329.96px]"
                    src="https://via.placeholder.com/380x330"
                    alt=""
                  />
                </div>
                <div className="self-stretch h-[138px] flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="w-[400px] text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                      2 Bedroom, Studio apartment
                    </div>
                    <div className="opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                      Studio • 2 bath • 416 sqft
                    </div>
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-neutral-800 text-[31px] font-semibold font-['Manrope'] leading-10">
                      $2,089
                    </div>
                    <div className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
                      <div className="text-white text-base font-medium font-['Manrope'] leading-tight">
                        Enquire now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[400px] max-md:w-full h-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[53.65px] flex-col justify-center items-center flex">
                  <img
                    className="w-[380.49px] h-[329.96px]"
                    src="https://via.placeholder.com/380x330"
                    alt=""
                  />
                </div>
                <div className="self-stretch h-[138px] flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="w-[400px] text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                      2 Bedroom, Studio apartment
                    </div>
                    <div className="opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                      Studio • 2 bath • 416 sqft
                    </div>
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-neutral-800 text-[31px] font-semibold font-['Manrope'] leading-10">
                      $2,089
                    </div>
                    <div className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
                      <div className="text-white text-base font-medium font-['Manrope'] leading-tight">
                        Enquire now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[400px] max-md:w-full h-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[53.65px] flex-col justify-center items-center flex">
                  <img
                    className="w-[380.49px] h-[329.96px]"
                    src="https://via.placeholder.com/380x330"
                    alt=""
                  />
                </div>
                <div className="self-stretch h-[138px] flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="w-[400px] text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                      2 Bedroom, Studio apartment
                    </div>
                    <div className="opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                      Studio • 2 bath • 416 sqft
                    </div>
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-neutral-800 text-[31px] font-semibold font-['Manrope'] leading-10">
                      $2,089
                    </div>
                    <div className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
                      <div className="text-white text-base font-medium font-['Manrope'] leading-tight">
                        Enquire now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[400px] max-md:w-full h-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[53.65px] flex-col justify-center items-center flex">
                  <img
                    className="w-[380.49px] h-[329.96px]"
                    src="https://via.placeholder.com/380x330"
                    alt=""
                  />
                </div>
                <div className="self-stretch h-[138px] flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="w-[400px] text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                      2 Bedroom, Studio apartment
                    </div>
                    <div className="opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                      Studio • 2 bath • 416 sqft
                    </div>
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-neutral-800 text-[31px] font-semibold font-['Manrope'] leading-10">
                      $2,089
                    </div>
                    <div className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
                      <div className="text-white text-base font-medium font-['Manrope'] leading-tight">
                        Enquire now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Floor;
