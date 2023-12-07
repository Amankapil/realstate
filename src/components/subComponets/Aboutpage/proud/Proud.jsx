import React from "react";
import loca from "./locat.svg";
import bed from "./Hotel Bed.png";
import curr from "./Currency Dollar.png";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Proud = () => {
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
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[10.65px] flex-col justify-center items-center flex">
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
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <button className="w-[134px] h-6 justify-start items-center gap-1 inline-flex">
                      <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                        Explore project
                      </div>
                      <img
                        alt=""
                        src={loca}
                        className="w-4 h-[17.10px] relative origin-top-left -rotate-0"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[400px]  max-md:w-full h-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[10.65px] flex-col justify-center items-center flex">
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
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <button className="w-[134px] h-6 justify-start items-center gap-1 inline-flex">
                      <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                        Explore project
                      </div>
                      <img
                        alt=""
                        src={loca}
                        className="w-4 h-[17.10px] relative origin-top-left -rotate-0"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[400px]  max-md:w-full h-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[10.65px] flex-col justify-center items-center flex">
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
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <button className="w-[134px] h-6 justify-start items-center gap-1 inline-flex">
                      <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                        Explore project
                      </div>
                      <img
                        alt=""
                        src={loca}
                        className="w-4 h-[17.10px] relative origin-top-left -rotate-0"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[400px]  max-md:w-full h-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[10.65px] flex-col justify-center items-center flex">
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
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <button className="w-[134px] h-6 justify-start items-center gap-1 inline-flex">
                      <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                        Explore project
                      </div>
                      <img
                        alt=""
                        src={loca}
                        className="w-4 h-[17.10px] relative origin-top-left -rotate-0"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[400px]  max-md:w-full h-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[10.65px] flex-col justify-center items-center flex">
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
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <button className="w-[134px] h-6 justify-start items-center gap-1 inline-flex">
                      <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                        Explore project
                      </div>
                      <img
                        alt=""
                        src={loca}
                        className="w-4 h-[17.10px] relative origin-top-left -rotate-0"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[400px]  max-md:w-full h-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[398px] h-[437px] pl-[9.21px] pr-[8.29px] pt-[53.40px] pb-[10.65px] flex-col justify-center items-center flex">
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
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <button className="w-[134px] h-6 justify-start items-center gap-1 inline-flex">
                      <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                        Explore project
                      </div>
                      <img
                        alt=""
                        src={loca}
                        className="w-4 h-[17.10px] relative origin-top-left -rotate-0"
                      />
                    </button>
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

export default Proud;
