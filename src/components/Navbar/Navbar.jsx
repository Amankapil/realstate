import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./nav.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  let [active, setactive] = useState(false);
  let [width, setWidth] = useState(window.innerWidth);
  // const decodedToken = jwt.decode(token);
  // const userName = decodedToken.username;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const hamburger = () => {
    setactive(!active);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setactive(!active);
  };

  if (location.pathname === "/") {
    return (
      <>
        {width <= 900 ? (
          <>
            <nav>
              <div class=" mobile navbar flex items-start justify-between mx-12 -full relative min-[1700px]:mx-20 pt-2">
                <div class="logo">
                  <NavLink to={"/"}>
                    <div className="w-[99px] h-[50px] relative">
                      <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Manrope'] leading-[25.13px]">
                        Heading
                        <br />
                        <span className="ml-5">Partners</span>
                      </div>
                      <div className="w-[17.75px] h-[15.92px] left-[81.25px] top-[6.46px] absolute bg-white rounded-tl-lg rounded-tr-[1px] rounded-bl-lg rounded-br-[1px]" />
                      <div className="w-[15.59px] h-[15.59px] left-0 top-[29.41px] absolute bg-white rounded-full" />
                    </div>
                  </NavLink>
                </div>
                {/* {active ? ( */}
                <>
                  <div
                    class={`lists z-[9999999999] flex items-center justify-between flex-col ${
                      active ? "active" : ""
                    }`}
                  >
                    <div class="ul mr16 ">
                      <ul class="unorders flex items-center flex-col gap-7 ">
                        <li class="items">
                          <NavLink to={"/about"}>About us</NavLink>
                        </li>

                        <li class="items">
                          <NavLink to={"/project"}> Projects</NavLink>
                        </li>
                        <li class="items">
                          <NavLink to={"/Location"}> Locations</NavLink>
                        </li>
                        <li class="items">
                          <Link onClick={scrollToTop} to={"/"}>
                            Services
                          </Link>
                        </li>
                        <li class="items">
                          <NavLink to={"/blog"}>Our Brands</NavLink>
                        </li>
                        <li class="items">
                          <NavLink to={"/career"}> Careers</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
                {/* ) : ( */}
                <button className="btn-ham font-white" onClick={hamburger}>
                  {active ? "X" : ""}
                  ||
                </button>

                <div className="justify-end items-center gap-[31px] flex">
                  <button className="nav-btn px-8 py-4  bg-opacity-10 rounded-[23px] justify-center items-center gap-2 flex">
                    <NavLink to={"/contact"}>
                      <span className=" text-  text-sm font-medium font-['Manrope'] leading-[17.59px]">
                        Contact us
                      </span>
                    </NavLink>
                  </button>
                  {/* <div className="menu-ham" onClick={hamburger}>
                  <MenuIcon />
                </div> */}

                  <button className="btn-ham text-white" onClick={hamburger}>
                    {active ? "X" : <MenuIcon />}
                  </button>
                </div>
              </div>
            </nav>
          </>
        ) : (
          <div className="flex items-center justify-center bglack py-3 mt-5">
            <div className="w-[1240px] max-md:w-full h-[50px] justify-between items-start inline-flex">
              <div className="justify-center items-center gap-[115px] flex">
                <NavLink to={"/"}>
                  <div className="w-[99px] h-[50px] relative">
                    <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Manrope'] leading-[25.13px]">
                      Heading
                      <br />
                      <span className="ml-5">Partners</span>
                    </div>
                    <div className="w-[17.75px] h-[15.92px] left-[81.25px] top-[6.46px] absolute bg-white rounded-tl-lg rounded-tr-[1px] rounded-bl-lg rounded-br-[1px]" />
                    <div className="w-[15.59px] h-[15.59px] left-0 top-[29.41px] absolute bg-white rounded-full" />
                  </div>
                </NavLink>

                <div className="justify-start items-start gap-[46px] flex links-parent max-lg:hidden">
                  <div className="  text-sm font-medium font-['Manrope'] leading-[17.59px] nav-link">
                    <NavLink to={"/about"}>About us</NavLink>
                  </div>
                  <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                    <NavLink to={"/project"}> Projects</NavLink>
                  </div>
                  <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                    <NavLink to={"/Location"}> Locations</NavLink>
                  </div>
                  <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                    Services
                  </div>
                  <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                    <NavLink to={"/blog"}>Our Brands</NavLink>
                  </div>
                  <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                    <NavLink to={"/career"}> Careers</NavLink>
                  </div>
                  <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                    Investors
                  </div>
                </div>
              </div>
              <div className="justify-end items-center gap-[31px] flex">
                <button className="nav-btn px-8 py-4  bg-opacity-10 rounded-[23px] justify-center items-center gap-2 flex">
                  <NavLink to={"/contact"}>
                    <span className=" text-  text-sm font-medium font-['Manrope'] leading-[17.59px]">
                      Contact us
                    </span>
                  </NavLink>
                </button>
                <div className="menu-ham">
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else if (location.pathname === "/projectinner") {
    return (
      <div className="flex items-center justify-center bglack py-3 mt-5">
        <div className="w-[1240px] max-md:w-full h-[50px] justify-between items-start inline-flex">
          <div className="justify-center items-center gap-[115px] flex">
            <NavLink to={"/"}>
              <div className="w-[99px] h-[50px] relative">
                <div className="left-0 top-0 absolute text-white text-xl font-medium font-['Manrope'] leading-[25.13px]">
                  Heading
                  <br />
                  <span className="ml-5">Partners</span>
                </div>
                <div className="w-[17.75px] h-[15.92px] left-[81.25px] top-[6.46px] absolute bg-white rounded-tl-lg rounded-tr-[1px] rounded-bl-lg rounded-br-[1px]" />
                <div className="w-[15.59px] h-[15.59px] left-0 top-[29.41px] absolute bg-white rounded-full" />
              </div>
            </NavLink>

            <div className="justify-start items-start gap-[46px] flex links-parent max-lg:hidden">
              <div className="  text-sm font-medium font-['Manrope'] leading-[17.59px] nav-link">
                <NavLink to={"/about"}>About us</NavLink>
              </div>
              <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                <NavLink to={"/project"}> Projects</NavLink>
              </div>
              <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                <NavLink to={"/Location"}> Locations</NavLink>
              </div>
              <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                Services
              </div>
              <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                <NavLink to={"/blog"}>Our Brands</NavLink>
              </div>
              <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                <NavLink to={"/career"}> Careers</NavLink>
              </div>
              <div className="text-white text-sm font-medium font-['Manrope'] leading-[17.59px]">
                Investors
              </div>
            </div>
          </div>
          <div className="justify-end items-center gap-[31px] flex">
            <button className="nav-btn px-8 py-4  bg-opacity-10 rounded-[23px] justify-center items-center gap-2 flex">
              <NavLink to={"/contact"}>
                <span className=" text-  text-sm font-medium font-['Manrope'] leading-[17.59px]">
                  Contact us
                </span>
              </NavLink>
            </button>
            <div className="menu-ham">
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center bglack py-3 mt-5">
        <div className="w-[1240px] max-md:w-full h-[50px] justify-between items-start inline-flex">
          <div className="justify-center items-center gap-[115px] flex">
            <NavLink to={"/"}>
              <div className="w-[99px] h-[50px] relative">
                <div className="left-0 top-0 absolute text-black text-xl font-medium font-['Manrope'] leading-[25.13px]">
                  Heading
                  <br />
                  <span className="ml-5">Partners</span>
                </div>
                <div className="w-[17.75px] h-[15.92px] left-[81.25px] top-[6.46px] absolute bg-black rounded-tl-lg rounded-tr-[1px] rounded-bl-lg rounded-br-[1px]" />
                <div className="w-[15.59px] h-[15.59px] left-0 top-[29.41px] absolute bg-black rounded-full" />
              </div>
            </NavLink>

            <div className="justify-start items-start gap-[46px] flex links-parent max-lg:hidden">
              <div className="text-black text-sm font-medium font-['Manrope'] leading-[17.59px] nav-link">
                <NavLink to={"/about"}>About us</NavLink>
              </div>
              <div className="text-black text-sm font-medium font-['Manrope'] leading-[17.59px]">
                <NavLink to={"/project"}> Projects</NavLink>
              </div>
              <div className="text-black text-sm font-medium font-['Manrope'] leading-[17.59px]">
                <NavLink to={"/Location"}> Locations</NavLink>
              </div>
              <div className="text-black text-sm font-medium font-['Manrope'] leading-[17.59px]">
                Services
              </div>
              <div className="text-black text-sm font-medium font-['Manrope'] leading-[17.59px]">
                <NavLink to={"/blog"}>Our Brands</NavLink>
              </div>
              <div className="text-black text-sm font-medium font-['Manrope'] leading-[17.59px]">
                <NavLink to={"/career"}> Careers</NavLink>
              </div>
              <div className="text-black text-sm font-medium font-['Manrope'] leading-[17.59px]">
                Investors
              </div>
            </div>
          </div>
          <div className="justify-end items-center gap-[31px] flex">
            <button className="nav-btn-black px-8 py-4  bg-opacity-10 rounded-[23px] justify-center items-center gap-2 flex">
              <NavLink to={"/contact"}>
                <span className=" text-  text-sm font-medium font-['Manrope'] leading-[17.59px]">
                  Contact us
                </span>
              </NavLink>
            </button>
            <div className="menu-ham-black">
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
