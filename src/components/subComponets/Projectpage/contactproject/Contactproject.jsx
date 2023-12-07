import React from "react";

const Contactproject = () => {
  return (
    <>
      <div className="project-contact my-40">
        <div className="main-contact-project">
          <div className="w-full h[758px] relative bg-white flex flex-wrap max-lg:justify-center max-lg:items-center">
            <div className="ml-[100px] flex flex-col gap-4 max-lg:ml-0 max-lg:px-4"  >
              <div className=" flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] uppercase leading-none tracking-wide">
                  contact us
                </div>
                <div className="w-[610px] max-md:w-full text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
                  Let us help you find your next home
                </div>
              </div>

              <div className="flex-col justify-start items-start gap-7 inline-flex">
                <div className="text-slate-900 text-xl font-medium font-['Manrope'] leading-snug">
                  Heading Partners Co.
                </div>
                <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                  Streeterville
                  <br />
                  355 East Ohio Street
                  <br />
                  Chicago, IL 60611
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-7 inline-flex">
                <div className="text-slate-900 text-xl font-medium font-['Manrope'] leading-snug">
                  Contact Details
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="justify-start items-center gap-1.5 inline-flex">
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Phone
                      </div>
                    </div>
                    <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      561 998 4465
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="justify-start items-center gap-1.5 inline-flex">
                      <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                        Email
                      </div>
                    </div>
                    <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      hello@heading.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 max-md:px-4">
              <div className=" flex-col justify-start items-start gap-[46px] inline-flex flex-wrap">
                <div className="justify-start items-start gap-10 inline-flex flex-wrap">
                  <div className="flex-col justify-start items-start gap-3 inline-flex">
                    <input
                      className="w-[280.24px] h-[30px] borde[2px] border-black border-b-2"
                      placeholder="Enter your name*"
                    />
                  </div>
                  <div className="flex-col justify-start items-start gap-3 inline-flex">
                    <input
                      className="w-[280.24px] h-[30px] borde[2px] border-black border-b-2"
                      placeholder="Enter your email* "
                    />
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <input
                    className="w-[280.24px] h-[30px] borde[2px] border-black border-b-2"
                    placeholder="Enter your phone number* "
                  />
                </div>
                <div className="h-[26px] flex-col justify-start items-start gap-3 flex">
                  <select className="pl-5 pr-[60px] pt-[10.50px] pb-[11.50px]  justify-center items-start gap-[35px] inline-flex w-[480.24px] max-md:w-full max-md:pr-0 max-md:pl-0 borde[2px] border-black border-b-2">
                    <option value="jj">
                      Select A property your interested in
                    </option>
                    <option value="j">$1,500 - $4,500</option>
                    <option value="4532">$1,500 - $4,500</option>
                    <option value="rqe">$1,500 - $4,500</option>
                  </select>
                </div>
                <div className=" flex-col justify-start items-start gap-3 flex">
                  <textarea
                    className="pl-5 pr-[60px] pt-[10.50px] pb-[11.50px]  justify-center items-start gap-[35px] inline-flex w-[480.24px] max-md:w-full borde[2px] border-black border-b-2"
                    placeholder="Help me find a property in chicago"
                  ></textarea>
                </div>
              </div>

              <button className="w-[214px] px-12 py-4 left-[730px] top-[593px]  bg-blue-800 rounded-[22px] justify-center items-center gap-2 inline-flex">
                <div className="text-white text-base font-medium font-['Manrope'] leading-tight">
                  Submit form
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactproject;
