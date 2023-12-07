import React from "react";
import loca from "./locat.svg";
import bed from "./Hotel Bed.png";
import curr from "./Currency Dollar.png";
import { Link } from "react-router-dom";
const Chicago = () => {
  return (
    <>
      <div className="by-area mt-20">
        <div className="main-area">
          <div className="head-area ml-[60px] flex justify-between items-center flex-wrap   max-md:gap-5  max-md:ml-0  max-md:px-4 ">
            <div className="w-[50%]   max-lg:w-full  flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] uppercase leading-none tracking-wide">
                Explore by area
              </div>
              <div className="w-[60%]  max-md:w-full text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
              More projects in Chicago area
              </div>
            </div>



            <div className=" projecs-btn  bg-stone-50 rounded-[22px] justify-center items-center gap-4 inline-flex">
              <Link to={"/project"}>
                <button className="text-neutral-800 text-base font-medium font-['Manrope'] leading-tight flex justify-center items-center gap-2 px-8 py-4">
                  View all projects
                  <p></p>
                </button>
              </Link>
            </div>
          </div>

          <div className="main-cards-property  max-md:px-4 px-[60px] flex justify-start items-center flex-wrap gap-[58px] mt-20  max-lg:justify-center  max-lg:items-center">
            <div className="project-card flex-col justify-start items-start gap-9 inline-flex w400px]">
              <div className="flex-col justify-start items-start gap-8 flex">
                <img
                  className=" h-[258px] relative"
                  src="https://via.placeholder.com/400x258"
                  alt="placeholder"
                />
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[40 text-neutral-800 text-2xl font-medium font-['Manrope'] leading-[31.20px]">
                    Pursuit of a Radical Rhapsody
                  </div>
                  <div className=" opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    Senectus enim duis sed eu. Ac non mi nec ut feugiat at
                    phasellus praesent sed. Gravida cursus facilisi{" "}
                  </div>
                </div>
                <div className="justify-start items-start gap-[35px] inline-flex">
                  <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      {/* <div className="w-4 h-4 relative" /> */}
                      <img className="w-4 h-4" src={loca} alt="" />
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Location
                      </div>
                    </div>
                    <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Streeterville
                      <br />
                      355 East Ohio Street
                      <br />
                      Chicago, IL 60611
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <img className="w-4 h-4" src={bed} alt="" />
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Bedrooms
                      </div>
                    </div>
                    <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Studio- 3 Bedrooms
                      <br />2 Bedrooms
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <img className="w-4 h-4" src={curr} alt="" />
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Price
                      </div>
                    </div>
                    <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Starting at
                      <br />
                      $2,089
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-5 inline-flex">
                <button className="Enquire-btn h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
                  <div className="text-white text-base font-medium font-['Manrope'] leading-tight">
                    Enquire now
                  </div>
                </button>
                <button className="card-hover-btn px-9 py-4 bg-stone-50 rounded-[22px] justify-center items-center gap-2 flex">
                  <span className=" text-base font-medium font-['Manrope'] leading-tight">
                    View project
                  </span>
                </button>
              </div>
            </div>
            <div className="project-card flex-col justify-start items-start gap-9 inline-flex w400px]">
              <div className="flex-col justify-start items-start gap-8 flex">
                <img
                  className=" h-[258px] relative"
                  src="https://via.placeholder.com/400x258"
                  alt="placeholder"
                />
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[40 text-neutral-800 text-2xl font-medium font-['Manrope'] leading-[31.20px]">
                    Pursuit of a Radical Rhapsody
                  </div>
                  <div className=" opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    Senectus enim duis sed eu. Ac non mi nec ut feugiat at
                    phasellus praesent sed. Gravida cursus facilisi{" "}
                  </div>
                </div>
                <div className="justify-start items-start gap-[35px] inline-flex">
                  <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      {/* <div className="w-4 h-4 relative" /> */}
                      <img className="w-4 h-4" src={loca} alt="" />
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Location
                      </div>
                    </div>
                    <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Streeterville
                      <br />
                      355 East Ohio Street
                      <br />
                      Chicago, IL 60611
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <img className="w-4 h-4" src={bed} alt="" />
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Bedrooms
                      </div>
                    </div>
                    <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Studio- 3 Bedrooms
                      <br />2 Bedrooms
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <img className="w-4 h-4" src={curr} alt="" />
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Price
                      </div>
                    </div>
                    <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Starting at
                      <br />
                      $2,089
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-5 inline-flex">
                <button className="Enquire-btn h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
                  <div className="text-white text-base font-medium font-['Manrope'] leading-tight">
                    Enquire now
                  </div>
                </button>
                <button className="card-hover-btn px-9 py-4 bg-stone-50 rounded-[22px] justify-center items-center gap-2 flex">
                  <span className=" text-base font-medium font-['Manrope'] leading-tight">
                    View project
                  </span>
                </button>
              </div>
            </div>
            <div className="project-card flex-col justify-start items-start gap-9 inline-flex w400px]">
              <div className="flex-col justify-start items-start gap-8 flex">
                <img
                  className=" h-[258px] relative"
                  src="https://via.placeholder.com/400x258"
                  alt="placeholder"
                />
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[40 text-neutral-800 text-2xl font-medium font-['Manrope'] leading-[31.20px]">
                    Pursuit of a Radical Rhapsody
                  </div>
                  <div className=" opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    Senectus enim duis sed eu. Ac non mi nec ut feugiat at
                    phasellus praesent sed. Gravida cursus facilisi{" "}
                  </div>
                </div>
                <div className="justify-start items-start gap-[35px] inline-flex">
                  <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      {/* <div className="w-4 h-4 relative" /> */}
                      <img className="w-4 h-4" src={loca} alt="" />
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Location
                      </div>
                    </div>
                    <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Streeterville
                      <br />
                      355 East Ohio Street
                      <br />
                      Chicago, IL 60611
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <img className="w-4 h-4" src={bed} alt="" />
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Bedrooms
                      </div>
                    </div>
                    <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Studio- 3 Bedrooms
                      <br />2 Bedrooms
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <img className="w-4 h-4" src={curr} alt="" />
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Price
                      </div>
                    </div>
                    <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Starting at
                      <br />
                      $2,089
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-5 inline-flex">
                <button className="Enquire-btn h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
                  <div className="text-white text-base font-medium font-['Manrope'] leading-tight">
                    Enquire now
                  </div>
                </button>
                <button className="card-hover-btn px-9 py-4 bg-stone-50 rounded-[22px] justify-center items-center gap-2 flex">
                  <span className=" text-base font-medium font-['Manrope'] leading-tight">
                    View project
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chicago;
