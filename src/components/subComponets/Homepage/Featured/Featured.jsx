import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./features.scss";
import omg from "./assets/unsplash_JkcYTtNfFgw.png";
const Featured = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="main-featured max-md:px-4">
        <div className="w-[60%] h-[168px] max-lg:h-full max-md:w-full max-md:ml-0 flex-col justify-start items-start gap-6 inline-flex ml-[100px] mt-20 max-lg:ml-0 ">
          <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] uppercase leading-none tracking-wide">
            featured projects
          </div>
          <div className="w-[70%] max-md:w-full text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
            Sed mauris sit facilisis aliquam dictum{" "}
          </div>
        </div>

        <div className="slickk-carosel relative mt-8">
          <Slider {...settings} className="overflow-hidden w-0%]">
            <div className="img-features">
              <div className="flex justify-center items-center">
                <img src={omg} alt="" />
              </div>
            </div>
            <div className="img-features">
              <div className="flex justify-center items-center">
                <img src={omg} alt="" />
              </div>
            </div>
            <div className="img-features">
              <div className="flex justify-center items-center">
                <img src={omg} alt="" />
              </div>
            </div>
            <div className="img-features">
              <div className="flex justify-center items-center">
                <img src={omg} alt="" />
              </div>
            </div>
            <div className="img-features">
              <div className="flex justify-center items-center">
                <img src={omg} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Featured;
