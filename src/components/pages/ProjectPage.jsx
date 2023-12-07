import React from "react";
import Projecthero from "../subComponets/Projectpage/Projecthero/Projecthero";
import Properties from "../subComponets/Projectpage/properties/Properties";
import Byarea from "../subComponets/Projectpage/byarea/Byarea";
import Contactproject from "../subComponets/Projectpage/contactproject/Contactproject";
import Chicago from "../subComponets/projectinner/chicago/Chicago";

const ProjectPage = () => {
  return (
    <>
      <Projecthero />
      <Properties />
      <Byarea />
      <Contactproject />
     
    </>
  );
};

export default ProjectPage;
