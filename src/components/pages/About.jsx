import React from "react";
import AboutHero from "../subComponets/Aboutpage/abuthero/AboutHero";
import MIssion from "../subComponets/Aboutpage/mission/MIssion";
import Teams from "../subComponets/Homepage/leadership/Teams";
import Sustainability from "../subComponets/Aboutpage/sustainability/Sustainability";
import Proud from "../subComponets/Aboutpage/proud/Proud";
import Journy from "../subComponets/Aboutpage/journy/Journy";

const About = () => {
  return (
    <>
      <AboutHero />
      <MIssion />
      <Teams />
      <Sustainability />
      <Proud />
      <Journy />
    </>
  );
};

export default About;
