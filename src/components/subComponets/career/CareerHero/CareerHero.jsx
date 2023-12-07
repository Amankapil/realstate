import image1 from "./assets/slide-1.jpg";
import image2 from "./assets/slide-2.jpg";
import image3 from "./assets/slide-3.jpg";

import "./chero.scss";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";

import { useRef, useEffect } from "react";

const CareerHero = () => {
  let slideImg4 = useRef(null);
  let slideImg5 = useRef(null);
  let slideImg6 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg4, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg5, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg6, { x: "0%" }, { x: "-100%" });
  }, []);

  return (
    <>
      <div className="career-hero">
        <div className="main-career-hero">
          <div className="head flex justify-center items-center mt-10">
            <h1 className="w-[439.64px] text-center text-slate-900 text-[61px] font-normal font-['Manrope'] leading-[73.20px]">
              Build Your Future with Us
            </h1>
          </div>

          <div className="horizontal-slide max-xl:mt-10   servicchomesection">
            <img
              //   src={image1}
              src="https://via.placeholder.com/610x457"
              alt=""
              className="HS-img"
              ref={(el) => (slideImg4 = el)}
            />

            <img
              //   src={image2}
              src="https://via.placeholder.com/610x457"
              alt=""
              className="HS-img"
              ref={(el) => (slideImg5 = el)}
            />
            <img
              //   src={image3}
              src="https://via.placeholder.com/610x457"
              alt=""
              className="HS-img"
              ref={(el) => (slideImg6 = el)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerHero;
