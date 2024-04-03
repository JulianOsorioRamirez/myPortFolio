import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import Aboutme from "./AboutMe";

import Projecst from "./Projects";

function Portfolio() {
  
    return (
      <div className="page">
        <Navbar/>
        <Aboutme/>
        <h1 className="proyectsTittle">Proyectos</h1>
        <Projecst/>
        {/* <Photo/>
        <Formation/>
        <Line/>
        <Projects/>
        <Technologies/>
        <Aditional/>
        <Footer/>  */}
        </div>
    );
  }
  
  export default Portfolio;