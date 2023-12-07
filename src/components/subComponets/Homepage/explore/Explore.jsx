import React from "react";

const Explore = () => {
  return (
    <div className="explore mt-32 mx-md:hidden">
      <div className="main-explore ">
        <div className="w-full h-[824px] max-md:h-full max-md:gap-8 relative  expore-bg flex justify-between px-20  maxmd:px-5 max-md:py-20 items-end pb-32 max-md:items-start max-md:flex-wrap">
          <div>
            <div className="w-[525px] max-md:w-full left-[100px] top-[646.91px]  text-white text-[49px] font-normal font-['Manrope'] leading-[58.80px]">
              Pursuit of a Radical Rhapsody
            </div>
            <div className="w-[467.52px] max-md:w-full mt-5 left-[100px] top-[608.09px]  text-white text-base font-normal font-['Manrope'] leading-[17.60px]">
              Explore next
            </div>
          </div>

          <div className="z-[999999]">
            <button className=" projecs-btn  bg-stone-50 rounded-[22px] justify-center items-center gap-4 inline-flex">
              <button className="text-neutral-800 text-base font-medium font-['Manrope'] leading-tight flex justify-center items-center gap-2 px-8 py-4">
                View all projects
                <p></p>
              </button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
