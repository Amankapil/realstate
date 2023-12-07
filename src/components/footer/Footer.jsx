import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <div className="footer">
        <div className="w-fulll h-full pl-[100px] pr-[222px] max-lg:pr-4 max-lg:pl-8 pt-[160.75px] pb-[79.25px] bg-white justify-start items-center inline-flex flex-wrap">
          <div className="self-stretch justify-start items-start gap-[230px] inline-flex max-lg:flex-wrap max-md:h-full">
            <div className="w-[250px] h-24 relative ">
              <div className="left-0 top-0 absolute text-black text-[38.38px] font-medium font-['Manrope'] leading-[48.24px]">
                Heading
                <br />
                <span className="ml-8">Partners</span>
              </div>
              <div className="w-[34.06px] h-[30.55px] left-[155.94px] top-[12.40px] absolute bg-black rounded-tl-2xl rounded-tr-sm rounded-bl-2xl rounded-br-sm" />
              <div className="w-[29.92px] h-[29.92px] left-0 top-[56.45px] absolute bg-black rounded-full" />
            </div>
            <div className="h-[430px] max-lg:h-full max-md:gap-5 max-lg:gap-16 justify-start items-start gap-[125px] flex flex-wrap">
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
                  Company
                </div>
                <div className="justify-start items-start gap-9 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      <NavLink onClick={scrollToTop} to={"/about"}>About us</NavLink>
                    </div>
                    <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      <NavLink onClick={scrollToTop} to={"/project"}>Projects</NavLink>
                    </div>
                    <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      <NavLink onClick={scrollToTop} to={"/Location"}>Locations</NavLink>
                    </div>
                    <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      <NavLink onClick={scrollToTop} to={"/contact"}> Contact us</NavLink>
                    </div>
                    <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Services
                    </div>
                  </div>
                  <div className="w-[82px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      <NavLink onClick={scrollToTop} to={"/blog"}> Our Brands</NavLink>
                    </div>

                    <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      <NavLink onClick={scrollToTop} to={"/career"}> Careers</NavLink>
                    </div>
                    <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      <NavLink onClick={scrollToTop} to={"/investor"}> Investors</NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-7 inline-flex">
                <div className="text-slate-900 text-xl font-medium font-['Manrope'] leading-snug">
                  Projects
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    Pursuit of a Radical Rhapsody
                  </div>
                  <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    Windmills of Your Mind
                  </div>
                  <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    Learning to Fly
                  </div>
                  <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    In That Quiet Earth
                  </div>
                  <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    After The Rain
                  </div>
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
              <div className="flex-col justify-start items-start gap-7 inline-flex">
                <div className="text-slate-900 text-xl font-medium font-['Manrope'] leading-snug">
                  Socials
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    Linkedin
                  </div>
                  <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    Instagram
                  </div>
                  <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    X
                  </div>
                  <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    Facebook
                  </div>
                  <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                    Youtube
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[85px] max-xl:mt-20 pl-[101.02px] pr-[99.98px] pt-[14.44px] pb-[24.62px] bg-white flex-col justify-start items-start gap-[24.94px] inline-flex max-md:px-4 max-md:h-full ">
          <div className="wfull h-[0px] border border-black border-opacity-20"></div>
          <div className="self-stretch justify-start items-start gap-[565px] max-xl:gap-[20px] inline-flex flex-wrap">
            <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
              All Rights Reserved. Heading Partners Company @ 2023.
            </div>
            <div className="opacity-90 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
              Disclaimer | Terms and Conditions | Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
