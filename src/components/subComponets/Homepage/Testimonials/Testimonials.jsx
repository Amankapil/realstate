import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "./testimon.scss";
import msg from "./assets/unsplash_y9L5-wmifaY.png";
import msge from "./assets/unsplash_y9L5-wmifaY.png";
import msgd from "./assets/unsplash_y9L5-wmifaY.png";

const Testimonials = () => {
  const paginationImages = [msg, msge, msgd];

  const [progress, setProgress] = useState(50);

  useEffect(() => {
    const progressBarInterval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 1000);

    return () => clearInterval(progressBarInterval);
  }, []);

  return (
    <>
      {/* <div class="testimonial-container">
        <div class="progress-bar"></div>
        <div class="fas fa-quote-left fa-quote"></div>
        <div class="fas fa-quote-right fa-quote"></div>
        <p ref={testimonialRef} class="testimonial">
          Since applying the Coppercoat system I have been delighted with its
          performance. There's been much less weed build-up than in previous
          years, and what did appear has been easy to remove. It’s quite a high
          initial outlay, but a lot of money will be saved over the years and it
          seems to work as a very effective anti-fouling with the bonus of
          offering good hull protection.
        </p>
        <div class="user">
          <img
            ref={userImageRef}
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="user"
            class="user-image"
          />
          <div class="user-details">
            <h4 ref={usernameRef} class="username">
              Mia Asano
            </h4>
            <p ref={roleRef} class="role">
              Sales
            </p>
          </div>
        </div>
      </div> */}
      <div className="testimonials max-md:hidden">
        <div className="main-testimonials">
          <div className="w-full h-[758px] relative bg-white">
            <div className="left-[100px] top-[68px] absolute flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] uppercase leading-none tracking-wide">
                Testimonials
              </div>
              <div className="w-[610px] text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
                Sed mauris sit facilisis aliquam dictum{" "}
              </div>
            </div>

            <div className="h-[500px]">
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
                // pagination={{ clickable: true }}
                pagination={{
                  clickable: true,
                  renderBullet: function (index, className) {
                    return `<span class="${className}" style="background-image: url(${paginationImages[index]}); background-repeat: no-repeat; background-size: 100%; border-radius:${progress}%; border-coo"></span>`;
                  },
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[683px]"
              >
                <SwiperSlide>
                  <div className="w-[821px] max-lg:w-full h-[383px] left-[519px] top-[273.25px] absolute bg-stone-50">
                    <div className="w-[644.25px] h-[170.32px] left-[58.97px] top-[55.12px] absolute opacity-80 text-neutral-800 text-[25px] font-normal font-['Manrope'] leading-[35px]">
                      Sit eleifend nisl risus consequat. Turpis in pellentesque
                      massa dolor senectus. Nisi libero a pellentesque
                      vestibulum urna tincidunt egestas. Morbi a quam amet vitae
                      consequat at dignissim dictum. Libero sed volutpat egestas
                      aenean sed euismod vivamus semper.
                    </div>
                    <div className="left-[138.84px] top-[268.90px] absolute text-neutral-800 text-xl font-medium font-['Manrope'] leading-7">
                      Sit eleifend{" "}
                    </div>
                    <div className="left-[138.84px] top-[304.90px] absolute opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-tight">
                      Sit eleifend{" "}
                    </div>
                    <div className="w-16 h-16 left-[54.97px] top-[268.90px] absolute">
                      <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-300 rounded-full" />
                      {/* <img
                  className="w-[118.94px] h-[154.73px] left-[-27.47px] top-[-19.91px] absolute"
                  src="https://via.placeholder.com/119x155"
                  alt=""
                /> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[821px] max-lg:w-full h-[383px] left-[519px] top-[273.25px] absolute bg-stone-50">
                    <div className="w-[644.25px] h-[170.32px] left-[58.97px] top-[55.12px] absolute opacity-80 text-neutral-800 text-[25px] font-normal font-['Manrope'] leading-[35px]">
                      Sit eleifend nisl risus consequat. Turpis in pellentesque
                      massa dolor senectus. Nisi libero a pellentesque
                      vestibulum urna tincidunt egestas. Morbi a quam amet vitae
                      consequat at dignissim dictum. Libero sed volutpat egestas
                      aenean sed euismod vivamus semper.
                    </div>
                    <div className="left-[138.84px] top-[268.90px] absolute text-neutral-800 text-xl font-medium font-['Manrope'] leading-7">
                      Sit eleifend{" "}
                    </div>
                    <div className="left-[138.84px] top-[304.90px] absolute opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-tight">
                      Sit eleifend{" "}
                    </div>
                    <div className="w-16 h-16 left-[54.97px] top-[268.90px] absolute">
                      <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-300 rounded-full" />
                      {/* <img
                  className="w-[118.94px] h-[154.73px] left-[-27.47px] top-[-19.91px] absolute"
                  src="https://via.placeholder.com/119x155"
                  alt=""
                /> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[821px] max-lg:w-full h-[383px] left-[519px] top-[273.25px] absolute bg-stone-50">
                    <div className="w-[644.25px] h-[170.32px] left-[58.97px] top-[55.12px] absolute opacity-80 text-neutral-800 text-[25px] font-normal font-['Manrope'] leading-[35px]">
                      Sit eleifend nisl risus consequat. Turpis in pellentesque
                      massa dolor senectus. Nisi libero a pellentesque
                      vestibulum urna tincidunt egestas. Morbi a quam amet vitae
                      consequat at dignissim dictum. Libero sed volutpat egestas
                      aenean sed euismod vivamus semper.
                    </div>
                    <div className="left-[138.84px] top-[268.90px] absolute text-neutral-800 text-xl font-medium font-['Manrope'] leading-7">
                      Sit eleifend{" "}
                    </div>
                    <div className="left-[138.84px] top-[304.90px] absolute opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-tight">
                      Sit eleifend{" "}
                    </div>
                    <div className="w-16 h-16 left-[54.97px] top-[268.90px] absolute">
                      <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-300 rounded-full" />
                      {/* <img
                  className="w-[118.94px] h-[154.73px] left-[-27.47px] top-[-19.91px] absolute"
                  src="https://via.placeholder.com/119x155"
                  alt=""
                /> */}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
