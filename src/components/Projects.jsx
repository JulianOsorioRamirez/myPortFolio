import React, { useState,useEffect} from "react";
import jaga from "../assets/images/project-jaga.png"
import cuber from "../assets/images/CUBER.jpg"
import dober from "../assets/images/doberman.jpg"
import enmacipatic from "../assets/images/redEnmacipatic.png"
import gitHupIcone from "../assets/images/mark-github-24@2x.png";


function Projecst() {
    const[taskDates, setTaskDates] = useState("");
    
    function cuberL() {
      window.location.replace('https://github.com/JulianOsorioRamirez/ProyectoCuber.git');
    }
    function doberL () {
      window.location.replace('https://github.com/JulianOsorioRamirez/proyectoIndividualFullStack.git');
    }
    function red () {
      window.location.replace('https://github.com/JulianOsorioRamirez/desafioDeTripulaciones.git');
    }
    function jagaL () {
      window.location.replace('https://github.com/JulianOsorioRamirez/proyecto_jaga.git');
    }
    useEffect(() => {
        fetch("dates")
        .then((response) => response.json())
        .then((res)=> console.log(setTaskDates(res)))
        
    }, []);
    useEffect(()=>{
        if(taskDates){
          console.log(taskDates)
          console.log(taskDates.img)
        }
    },[taskDates]);

  return (
    <div className="taskCont">
      
      
         <div className="taskProject">
        
        <div className="producto_img">
        <img className="imgCards" src={jaga} />
          
        </div>
        <h1 className="taskTitle">TPV Project-Jaga</h1>
        <div className="taskLine"></div>
        <p className="tasktText">Proyecto enfocado en la toma de pedidos y registro de actividad de empleados.Con uso de HTML, CSS ,JavScript, SesionStorage y LocalStorage</p>
        <button className="btnTask" onClick={jagaL} ><img className="gitIconeImg"  src={gitHupIcone} alt="" />Ver el código</button>

      </div>
      

      
         <div className="taskProject">
        
        <div className="producto_img">
        <img className="imgCards" src={cuber} />
          
        </div>
        <h1 className="taskTitle">CUBER</h1>
        <div className="taskLine"></div>
        <p className="tasktText">web enfocada en pedidos y geolocalización de transportes similares a empresas como UBER Y Bolt, enfocada a full Back-end, con uso de PUG, Express js, MongoDB y Mysql</p>
        <button className="btnTask" onClick={cuberL}>
        <img className="gitIconeImg"   src={gitHupIcone} alt="" />Ver el código</button>

      </div>
      

      
         <div className="taskProject">
        
        <div className="producto_img">
        <img className="imgCards" src={dober} />
          
        </div>
        <h1 className="taskTitle">e-commerce</h1>
        <div className="taskLine"></div>
        <p className="tasktText">Pagina web e-commerce enfocada en la compra y venta de prendas de ropa para un comercio real,Realizada con React js, MongoDB, Mysql y CSS.</p>
        <button className="btnTask" onClick={doberL}  >
        <img className="gitIconeImg"  src={gitHupIcone} alt="" />Ver el código</button>

      </div>
      

      
         <div className="taskProject">
        
        <div className="producto_img">
        <img className="imgCards" src={enmacipatic} />
          
        </div>
        <h1 className="taskTitle">Red Enmacipatic</h1>
        <div className="taskLine"></div>
        <p className="tasktText">App dedicada a el contacto entre personas de la tercera edad, voluntarios y personas del sector, realizada con React js, CSS, y MongoDB</p>
        <button className="btnTask" onClick={red} >
        <img className="gitIconeImg"  src={gitHupIcone} alt="" />Ver el código</button>

      </div>
      
  
    </div>
  );
}

export default Projecst;