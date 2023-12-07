import React, { useState } from "react";
import arrow from "./arrow.svg";
import loca from "./location.svg";

import "./project.scss";
import { Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
const categories = [
  {
    id: 1,
    name: "Category 1",
    properties: [
      {
        id: 1,
        name: (
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
              <button className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
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
        ),
      },

      {
        id: 2,
        name: (
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
              <button className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
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
        ),
      },
    ],
  },
  {
    id: 2,
    name: "Category 2",
    properties: [
      {
        id: 3,
        name: (
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
              <button className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
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
        ),
      },
      {
        id: 4,
        name: (
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
              <button className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
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
        ),
      },
    ],
  },
  {
    id: 3,
    name: "Category 3",
    properties: [
      {
        id: 5,
        name: (
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
              <button className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
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
        ),
      },
      {
        id: 6,
        name: (
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
                    <img
                      className="w-4 h-4"
                      src="https://via.placeholder.com/16x16"
                      alt=""
                    />
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
              <button className="h-[52px] px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 flex">
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
        ),
      },
    ],
  },
];

const PropertyCard = ({ id, name }) => (
  <div className="property-card">
    <p>{name}</p>
  </div>
);

const Projectshome = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (categoryId) => {
    const isChecked = selectedCategories.includes(categoryId);
    if (isChecked) {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const filteredProperties = categories.reduce(
    (filteredProperties, category) => {
      if (selectedCategories.length === 0) {
        return [...filteredProperties, ...category.properties];
      } else if (selectedCategories.includes(category.id)) {
        return [...filteredProperties, ...category.properties];
      }
      return filteredProperties;
    },
    []
  );

  return (
    <section className="Projectshome mt-40">
      <div className="main-projects">
        <div className="heading-project flex justify-center items-center">
          <div className="w-[467.52px] max-md:w-full h-[155px] flex-col justify-start items-start gap-9 inline-flex">
            <h1 className="w-[467.52px] max-md:w-full text-neutral-800 text-[61px] font-normal font-['Manrope'] leading-[67.10px]">
              Our Projects
            </h1>
            <div className=" projecs-btn  bg-stone-50 rounded-[22px] justify-center items-center gap-4 inline-flex">
              <Link to={"/project"}>
                <button className="text-neutral-800 text-base font-medium font-['Manrope'] leading-tight flex justify-center items-center gap-2 px-8 py-4">
                  View all projects
                  <p></p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start mt-10 gap-32 flex-wrap">
          <div className="left-filters max-lg:relative sticky top-0 h-[750]">
            <div className="w-[253px] h-[708px] flex-col justify-start items-start gap-8 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <h5 className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                  Filter by city
                </h5>
                <input
                  className="pl-5 pr-[18px] pt-[10.50px] pb-[11.50px] bg-stone-50 rounded-[5px] justify-center items-start gap-[35px] inline-flex"
                  placeholder="Search by State, City, Zip"
                />

                <div className="justify-center items-center gap[3px] inline-flex">
                  <Checkbox id="New-York" label="new tork" defaultChecked />
                  <label
                    htmlFor="New-York"
                    className="text-zinc-800 text-sm font-normal font-['Manrope'] capitalize"
                  >
                    New York
                  </label>
                </div>

                <div className="checkbox-container justify-center items-center gap-[10px] inline-flex flex-col ml-6">
                  {categories.map((category) => (
                    <div
                      className="justify-center items-center gap[3px] inline-flex  gap-4"
                      key={category.id}
                    >
                      <input
                        type="checkbox"
                        className="pr"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCheckboxChange(category.id)}
                        id={category.id}
                      />
                      <label
                        htmlFor={category.id}
                        className="text-zinc-800 text-sm font-normal font-['Manrope'] capitalize"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[253px] h-[0px] opacity-30 border border-black"></div>
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                  Filter by price range
                </div>
                <div className="flex-col justify-start items-start gap-[9px] flex">
                  <div className="w-[253px] h-2 relative bg-zinc-100 rounded-sm">
                    <div className="w-[115px] h-2 left-[70px] top-[-0.25px] absolute bg-blue-800 rounded-sm" />
                    <div className="w-[16.70px] h-[16.70px] left-[56.67px] top-[-4.35px] absolute bg-blue-800 rounded-full" />
                    <div className="w-[16.70px] h-[16.70px] left-[176.65px] top-[-4.35px] absolute bg-blue-800 rounded-full" />
                  </div>
                  <div className="w-[253px] justify-between items-start inline-flex">
                    <div className="opacity-70 text-zinc-800 text-sm font-normal font-['Manrope'] capitalize">
                      $6,500
                    </div>
                    <div className="opacity-70 text-right text-zinc-800 text-sm font-normal font-['Manrope'] capitalize">
                      $100,000
                    </div>
                  </div>
                </div>

                <select className="pl-5 pr-[18px] pt-[10.50px] pb-[11.50px] bg-stone-50 rounded-[5px] justify-center items-start gap-[35px] inline-flex">
                  <option value="jj">$1,500 - $4,500</option>
                </select>

                <div className="justify-center items-center gap[3px] inline-flex">
                  <Checkbox id="Nework" label="new tork" defaultChecked />
                  <label
                    htmlFor="Nework"
                    className="text-zinc-800 text-sm font-normal font-['Manrope'] capitalize"
                  >
                    $1,500 - $4,500
                  </label>
                </div>
                <div className="justify-center items-center gap[3px] inline-flex">
                  <Checkbox id="fiec" label="new tork" />
                  <label
                    htmlFor="fiec"
                    className="text-zinc-800 text-sm font-normal font-['Manrope'] capitalize"
                  >
                    $4,500 - $10,000
                  </label>
                </div>
                <div className="justify-center items-center gap[3px] inline-flex">
                  <Checkbox id="ten" label="new tork" />
                  <label
                    htmlFor="ten"
                    className="text-zinc-800 text-sm font-normal font-['Manrope'] capitalize"
                  >
                    $10,000 - $30,000
                  </label>
                </div>
              </div>
              <div className="w-[253px] h-[0px] opacity-30 border border-black"></div>
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="text-neutral-800 text-xl font-medium font-['Manrope'] leading-relaxed">
                  Filter by type
                </div>
                <div className="pl-5 pr-3.5 py-[9px] bg-stone-50 rounded-[5px] justify-end items-center gap-[125px] inline-flex">
                  <div className="text-zinc-800 text-sm font-normal font-['Manrope'] leading-[17.59px]">
                    Apartment
                  </div>
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>

          <div className="property-cards-container"></div>

          <div className="right-properties">
            <div className="w-[875px]  h-full max-lg:h-full justify-start items-start gap-[75px] inline-flex flex-wrap max-lg:w-full max-xl:justify-center max-xl:items-center max-md:px-4">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  name={property.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projectshome;
