import React, { useEffect, useState } from "react";
import loca from "./locat.svg";
import bed from "./Hotel Bed.png";
import curr from "./Currency Dollar.png";
import { Link } from "react-router-dom";

const Properties = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [hundred, setHundred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setHundred(true);
        console.log(window.scrollY);
      } else {
        setHundred(false);
        // console.log(window.scrollY);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount
  return (
    <>
      <div className="properties">
        <div className="main-properties">
          {hundred ? (
            <div className="filter-head flex max-lg:h-full max-lg:gap-[20px]  justify-center items-center sticky h-[90px] top-0 py-6 bg-white z-[9999]">
              <div className="w-[80%] h-full justify-start items-end gap-[22px] inline-flex flex-wrap max-lg:h-full max-lg: ">
                <div className="flexcol justify-start items-center gap-3 inline-flex">
                  <lable
                    for="filter"
                    className="text-neutral-800 text-md font-medium font-['Manrope'] leading-relaxed"
                  >
                    Filter by city
                  </lable>
                  <input
                    id="filter"
                    className="pl-5 pr-[18px] pt-[10.50px] pb-[11.50px] bg-stone-50 rounded-[5px] justify-center items-start gap-[35px] inline-flex"
                    placeholder="Search by State, City, Zip"
                  />
                </div>
                <div className="flexcol justify-start items-center gap-3 inline-flex">
                  <div className="text-neutral-800 text-md font-medium font-['Manrope'] leading-relaxed">
                    Filter by price range
                  </div>
                  <select className="pl-5 pr-[60px] pt-[10.50px] pb-[11.50px] bg-stone-50 rounded-[5px] justify-center items-start gap-[35px] inline-flex">
                    <option value="jj">$1,500 - $4,500</option>
                    <option value="j">$1,500 - $4,500</option>
                    <option value="4532">$1,500 - $4,500</option>
                    <option value="rqe">$1,500 - $4,500</option>
                  </select>
                </div>

                <div className="flexcol justify-start items-center gap-3 inline-flex">
                  <div className="text-neutral-800 text-md  font-medium font-['Manrope'] leading-relaxed">
                    Filter by type
                  </div>
                  <select className="pl-5 pr-[60px] pt-[10.50px] pb-[11.50px] bg-stone-50 rounded-[5px] justify-center items-start gap-[35px] inline-flex">
                    <option value="jj">Aprtment</option>
                    <option value="j">something</option>
                    <option value="4532">another thing</option>
                    <option value="rqe">something another</option>
                  </select>
                </div>
                <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] underline leading-[21px]">
                  Reset Filters
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="filter-head flex max-lg:h-full max-lg:gap-[20px]  justify-center items-center sticky h-[140px] top-0 py-6 bg-white z-[9999]">
                <div className="w-[80%] h-[92px] justify-start items-end gap-[62px] inline-flex flex-wrap max-lg:h-full max-lg: ">
                  <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <lable
                      for="filter"
                      className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed"
                    >
                      Filter by city
                    </lable>
                    <input
                      id="filter"
                      className="pl-5 pr-[18px] pt-[10.50px] pb-[11.50px] bg-stone-50 rounded-[5px] justify-center items-start gap-[35px] inline-flex"
                      placeholder="Search by State, City, Zip"
                    />
                  </div>
                  <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                      Filter by price range
                    </div>
                    <select className="pl-5 pr-[60px] pt-[10.50px] pb-[11.50px] bg-stone-50 rounded-[5px] justify-center items-start gap-[35px] inline-flex">
                      <option value="jj">$1,500 - $4,500</option>
                      <option value="j">$1,500 - $4,500</option>
                      <option value="4532">$1,500 - $4,500</option>
                      <option value="rqe">$1,500 - $4,500</option>
                    </select>
                  </div>

                  <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                      Filter by type
                    </div>
                    <select className="pl-5 pr-[60px] pt-[10.50px] pb-[11.50px] bg-stone-50 rounded-[5px] justify-center items-start gap-[35px] inline-flex">
                      <option value="jj">Aprtment</option>
                      <option value="j">something</option>
                      <option value="4532">another thing</option>
                      <option value="rqe">something another</option>
                    </select>
                  </div>
                  <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] underline leading-[21px]">
                    Reset Filters
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="properties-card mt-20">
            <div className="main-cards-property max-lg:px-5  px-[60px] flex justify-start items-center flex-wrap gap-[58px] max-lg:justify-center max-lg:items-center ">
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
                    <Link to="/projectinner">
                      <span className=" text-base font-medium font-['Manrope'] leading-tight">
                        View project
                      </span>
                    </Link>
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
      </div>
    </>
  );
};

export default Properties;
