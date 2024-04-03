import React, { useState, useEffect } from "react";
import {Link} from "react-scroll"
import personalPhoto from "../assets/images/personalPhoto.png";
import Icons from "./Icons"
import Line from "./Line";


function Aboutme () {
    return(
        <div>
    <div className="aboutMeDiv">
      <div className="aboutText">
      <h1 className="tittleMe">Julián Osorio Ramírez</h1>
      <p className="textAboutMe">
            Desarrollador Web Full Stack Junior. inmerso en proyectos tanto en
            grupo como individuales, enfocados a un ámbito real y profesional,
            con el fin de obtener las habilidades y conocimientos en las últimas
            tecnologías tanto para el front-end como el Back-end y la experiencia
            de trabajo con diferentes verticales del sector.
          </p>
      </div>
      <div className="aboutImg">
      <img className="personalPhoto" src={personalPhoto} alt="" />
      <Icons/>
      </div>
     <Line/>
      </div>
        </div>
    )
}

export default Aboutme;