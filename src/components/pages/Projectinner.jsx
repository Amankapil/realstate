import React from "react";
import ProjectInnerHero from "../subComponets/projectinner/projectInnerHero/ProjectInnerHero";
import Overview from "../subComponets/projectinner/overview/Overview";
import Location from "../subComponets/projectinner/location/Location";
import Amenities from "../subComponets/projectinner/amenities/Amenities";
import Testimonials from "../subComponets/Homepage/Testimonials/Testimonials";
import Floor from "../subComponets/projectinner/floorplan/Floor";
import Chicago from "../subComponets/projectinner/chicago/Chicago";

const Projectinner = () => {
  return (
    <>
      <ProjectInnerHero />
      <Overview />
      <Location />
      <Floor />
      <Amenities />
      {/* <Testimonials /> */}
      <Chicago />
    </>
  );
};

export default Projectinner;
