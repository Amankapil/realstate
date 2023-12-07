import React from "react";
import linkd from "./assets/linked.svg";
import arrpw from "./assets/arrow.svg";
import persone from "./assets/Frame 82.png";
import persone1 from "./assets/Frame 83.png";
import persone2 from "./assets/Frame 84.png";
import persone3 from "./assets/Frame 85.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Teams = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
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
    <div className="teams">
      <div className="main-teams">
        <div className="head-teams">
          <div className="w-[70%] max-lg:w-full h-[168px] max-lg:h-full ml-[100px] flex-col justify-start items-start gap-6 inline-flex max-xl:ml-0 max-lg:px-3">
            <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] uppercase leading-none tracking-wide">
              leadership
            </div>
            <div className="w-[50%] max-lg:w-full text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
              Sed mauris sit facilisis aliquam dictum
            </div>
          </div>
        </div>

        <div className="team-member pl-[100px] mt-[60px] max-lg:pl-4">
          <Slider {...settings} className="overflow-hidden w-0%]">
            <div>
              <div className="w-[292px] h-[529px] flex-col justify-start items-start gap-[23px] inline-flex">
                <div className="flex-col justify-end items-center flex">
                  <img
                    className="w-[326.12px] h-[350.10px]"
                    src={persone}
                    alt=""
                  />
                </div>
                <div className="flex-col justify-center items-end gap-3 flex">
                  <div className="justify-start items-start gap-[165px] inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-800 text-xl font-normal font-['Manrope'] leading-relaxed">
                        Sed mauris{" "}
                      </div>
                      <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[18.20px]">
                        Sed mauris{" "}
                      </div>
                    </div>
                    <img className="w-6 h-6 relative" src={linkd} alt="" />
                  </div>
                  <div className="w-[292px] opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                      Read more
                    </div>

                    <img
                      className="w-4 h-[17.10px] relative origin-top-left rot\ate-180"
                      src={arrpw}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[292px] h-[529px] flex-col justify-start items-start gap-[23px] inline-flex">
                <div className="flex-col justify-end items-center flex">
                  <img
                    className="w-[326.12px] h-[350.10px]"
                    src={persone1}
                    alt=""
                  />
                </div>
                <div className="flex-col justify-center items-end gap-3 flex">
                  <div className="justify-start items-start gap-[165px] inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-800 text-xl font-normal font-['Manrope'] leading-relaxed">
                        Sed mauris{" "}
                      </div>
                      <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[18.20px]">
                        Sed mauris{" "}
                      </div>
                    </div>
                    <img className="w-6 h-6 relative" src={linkd} alt="" />
                  </div>
                  <div className="w-[292px] opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                      Read more
                    </div>

                    <img
                      className="w-4 h-[17.10px] relative origin-top-left rot\ate-180"
                      src={arrpw}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[292px] h-[529px] flex-col justify-start items-start gap-[23px] inline-flex">
                <div className="flex-col justify-end items-center flex">
                  <img
                    className="w-[326.12px] h-[350.10px]"
                    src={persone2}
                    alt=""
                  />
                </div>
                <div className="flex-col justify-center items-end gap-3 flex">
                  <div className="justify-start items-start gap-[165px] inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-800 text-xl font-normal font-['Manrope'] leading-relaxed">
                        Sed mauris{" "}
                      </div>
                      <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[18.20px]">
                        Sed mauris{" "}
                      </div>
                    </div>
                    <img className="w-6 h-6 relative" src={linkd} alt="" />
                  </div>
                  <div className="w-[292px] opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                      Read more
                    </div>

                    <img
                      className="w-4 h-[17.10px] relative origin-top-left rot\ate-180"
                      src={arrpw}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[292px] h-[529px] flex-col justify-start items-start gap-[23px] inline-flex">
                <div className="flex-col justify-end items-center flex">
                  <img
                    className="w-[326.12px] h-[350.10px]"
                    src={persone3}
                    alt=""
                  />
                </div>
                <div className="flex-col justify-center items-end gap-3 flex">
                  <div className="justify-start items-start gap-[165px] inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-800 text-xl font-normal font-['Manrope'] leading-relaxed">
                        Sed mauris{" "}
                      </div>
                      <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[18.20px]">
                        Sed mauris{" "}
                      </div>
                    </div>
                    <img className="w-6 h-6 relative" src={linkd} alt="" />
                  </div>
                  <div className="w-[292px] opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                      Read more
                    </div>

                    <img
                      className="w-4 h-[17.10px] relative origin-top-left rot\ate-180"
                      src={arrpw}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[292px] h-[529px] flex-col justify-start items-start gap-[23px] inline-flex">
                <div className="flex-col justify-end items-center flex">
                  <img
                    className="w-[326.12px] h-[350.10px]"
                    src={persone}
                    alt=""
                  />
                </div>
                <div className="flex-col justify-center items-end gap-3 flex">
                  <div className="justify-start items-start gap-[165px] inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-800 text-xl font-normal font-['Manrope'] leading-relaxed">
                        Sed mauris{" "}
                      </div>
                      <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[18.20px]">
                        Sed mauris{" "}
                      </div>
                    </div>
                    <img className="w-6 h-6 relative" src={linkd} alt="" />
                  </div>
                  <div className="w-[292px] opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                      Read more
                    </div>

                    <img
                      className="w-4 h-[17.10px] relative origin-top-left rot\ate-180"
                      src={arrpw}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[292px] h-[529px] flex-col justify-start items-start gap-[23px] inline-flex">
                <div className="flex-col justify-end items-center flex">
                  <img
                    className="w-[326.12px] h-[350.10px]"
                    src={persone}
                    alt=""
                  />
                </div>
                <div className="flex-col justify-center items-end gap-3 flex">
                  <div className="justify-start items-start gap-[165px] inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-800 text-xl font-normal font-['Manrope'] leading-relaxed">
                        Sed mauris{" "}
                      </div>
                      <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[18.20px]">
                        Sed mauris{" "}
                      </div>
                    </div>
                    <img className="w-6 h-6 relative" src={linkd} alt="" />
                  </div>
                  <div className="w-[292px] opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                      Read more
                    </div>

                    <img
                      className="w-4 h-[17.10px] relative origin-top-left rot\ate-180"
                      src={arrpw}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[292px] h-[529px] flex-col justify-start items-start gap-[23px] inline-flex">
                <div className="flex-col justify-end items-center flex">
                  <img
                    className="w-[326.12px] h-[350.10px]"
                    src={persone}
                    alt=""
                  />
                </div>
                <div className="flex-col justify-center items-end gap-3 flex">
                  <div className="justify-start items-start gap-[165px] inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-800 text-xl font-normal font-['Manrope'] leading-relaxed">
                        Sed mauris{" "}
                      </div>
                      <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[18.20px]">
                        Sed mauris{" "}
                      </div>
                    </div>
                    <img className="w-6 h-6 relative" src={linkd} alt="" />
                  </div>
                  <div className="w-[292px] opacity-80 text-neutral-800 text-base font-normal font-['Manrope'] leading-normal">
                    With a focus on craftsmanship and personalisation, we
                    flipped the mass model on its head and....
                  </div>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="opacity-80 text-blue-800 text-base font-medium font-['Manrope'] underline leading-normal">
                      Read more
                    </div>

                    <img
                      className="w-4 h-[17.10px] relative origin-top-left rot\ate-180"
                      src={arrpw}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Teams;
