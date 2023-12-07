import React from "react";

const Overview = () => {
  return (
    <>
      <div className="overview">
        <div className="main-overview  max-md:px-">
          <div className="w-full  h-[809px] relative bg-white flex justify-center items-center gap-[90px] flex-wrap  max-md:h-full" >
            <div>
              <div className="left-[100px] max-md:px-0 max-md:pt-16 top-[77px]  flex-col justify-start items-start gap-[42px] inline-flex">
                <div className="h-full flex-col max-md:px-0 justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="text-neutral-800 text-[13px] font-medium font-['Manrope'] uppercase leading-none tracking-wide">
                      overview
                    </div>
                    <div className="w-[610px]  max-md:w-full text-neutral-800 text-[49px] font-normal font-['Manrope'] leading-[63.70px]">
                      Sed mauris sit facilisis aliquam dictum
                    </div>
                  </div>
                  <div className="w-[610px]  max-md:w-full justify-start items-start gap-8 inline-flex flex-wrap">
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-4 h-4 relative" />
                        <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                          Location
                        </div>
                      </div>

                      <div className="w-[223.13px] opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                        Streeterville, 355 East Ohio Street,
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
                        <div className="w-4 h-4 relative" />
                        <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                          sqft
                        </div>
                      </div>
                      <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                        1,890 sqft
                      </div>
                    </div>

                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-4 h-4 relative" />
                        <div className="text-neutral-800 text-sm font-semibold font-['Manrope'] leading-[21px]">
                          Amenities
                        </div>
                      </div>
                      <div className="w-[504px]  max-md:w-full justify-start items-start gap-2 inline-flex flex-wrap">
                        <div className="p-1.5 rounded-sm justify-start items-center gap-[11px] flex">
                          <div className="w-6 h-6 relative" />
                          <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                            Pet-friendly
                          </div>
                        </div>
                        <div className="p-1.5 rounded-sm justify-start items-center gap-[11px] flex">
                          <div className="w-6 h-6 relative" />
                          <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                            Fully-furnished flats available
                          </div>
                        </div>
                        <div className="p-1.5 rounded-sm justify-start items-center gap-[11px] flex">
                          <div className="w-6 h-6 relative" />
                          <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                            Parking on-premise
                          </div>
                        </div>
                        <div className="p-1.5 rounded-sm justify-start items-center gap-[11px] flex">
                          <div className="w-6 h-6 relative" />
                          <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                            5-acre park area
                          </div>
                        </div>
                      </div>
                      <div className="text-blue-800 text-base font-medium font-['Manrope'] underline leading-tight">
                        View all amenities
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[153px] flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="opacity-80 text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Starting from
                    </div>
                    <div className="w-[505px]   max-md:w-full justify-between items-center inline-flex">
                      <div className="text-neutral-800 text-[31px] font-semibold font-['Manrope'] leading-10">
                        $2,089
                      </div>
                      <div className="justify-start items-start gap-4 flex">
                        <div className="px-9 py-4 bg-stone-50 rounded-[22px] justify-center items-center gap-2 flex">
                          <div className="w-4 h-4 relative" />
                          <div className="text-neutral-800 text-base font-medium font-['Manrope'] leading-tight">
                            Save
                          </div>
                        </div>
                        <div className="px-9 py-4 bg-stone-50 rounded-[22px] justify-center items-center gap-2 flex">
                          <div className="w-4 h-4 relative" />
                          <div className="text-neutral-800 text-base font-medium font-['Manrope'] leading-tight">
                            Share
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="Enquire-btn  self-stretch px-12 py-4 bg-blue-800 rounded-[22px] justify-center items-center gap-2 inline-flex">
                    <span className="text-white text-base font-medium font-['Manrope'] leading-tight">
                      Enquire now
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className=" flex-col justify-start items-start gap-[23px] inline-flex">
                <div className="w-[610px]  max-md:w-full  max-lg:h-full h-[400px] relative">
                  <img
                    className="w-[646.79px]  max-md:w-full h-[431.19px] left-[-17.98px] top-[-16.05px] absolute"
                    src="https://via.placeholder.com/647x431"
                    alt=""
                  />
                  <div className="px-2 py-1 left-[16px] top-[351.25px] absolute bg-white rounded-[21px] justify-start items-center gap-[11px] inline-flex">
                    <div className="text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                      Ariel view
                    </div>
                  </div>
                </div>
                <div className="w-[610px]  max-md:hidden  max-md:w-full h-[133px] justify-start items-start gap-[23px] inline-flex">
                  <div className="w-[188px]  max-md:w-full h-[124px] relative">
                    <img
                      className="w-[199.19px] h-[132.79px] left-[-5.70px] top-[3.62px] absolute"
                      src="https://via.placeholder.com/199x133"
                      alt=""
                    />
                    <div className="px-2 py-1 left-[13px] top-[82.50px] absolute bg-white rounded-[21px] justify-start items-center gap-[11px] inline-flex">
                      <div className="text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                        Pool area
                      </div>
                    </div>
                  </div>
                  <div className="w-[188px]  max-md:w-full h-[133px] relative">
                    <img
                      className="w-48 h-[133.84px] left-[-1.53px] top-[3.42px] absolute"
                      src="https://via.placeholder.com/192x311"
                      alt=""
                    />
                    <div className="px-2 py-1 left-[13px] top-[82.50px] absolute bg-white rounded-[21px] justify-start items-center gap-[11px] inline-flex">
                      <div className="text-neutral-800 text-sm font-normal font-['Manrope'] leading-[21px]">
                        Kitchen
                      </div>
                    </div>
                  </div>
                  <div className="w-[188px]  max-md:w-full h-[64px] relative">
                    <div className="w-[187.23px] h-[133.74px] left-[0.27px] top-[3.68px] absolute bg-black bg-opacity-20" />
                    <div className="left-[73px] top-[44px] absolute text-center text-white text-2xl font-normal font-['Manrope'] leading-9">
                      +36
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
