import React from "react";
import Herohome from "../subComponets/Homepage/HomeHero/Herohome";
import Projectshome from "../subComponets/Homepage/homeProjects/Projectshome";
import Abouthome from "../subComponets/Homepage/homeAbout/Abouthome";
import Testimonials from "../subComponets/Homepage/Testimonials/Testimonials";
import Teams from "../subComponets/Homepage/leadership/Teams";
import Workhome from "../subComponets/Homepage/workHome/Workhome";
import Featured from "../subComponets/Homepage/Featured/Featured";
import Explore from "../subComponets/Homepage/explore/Explore";

const Homepage = () => {
  return (
    <>
      <Herohome />
      <Projectshome />
      <Abouthome />
      <Testimonials />
      <Teams />
      <Workhome />
      <Featured />
      <Explore />
    </>
  );
};

export default Homepage;
