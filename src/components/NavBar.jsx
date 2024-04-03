import React, { useState } from 'react'
import styled from 'styled-components'
 import BurguerBtn from "./BtnBurguer";
 import gitHupIcone from "../assets/images/mark-github-24@2x.png";
 import linkedinIcone from "../assets/images/Linkedin@2x.png";


function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  function github () {
    window.location.replace('https://github.com/JulianOsorioRamirez?tab=repositories');
  }
  function linkedin () {
    window.location.replace('https://www.linkedin.com/in/julian-osorio-ramirez-69559a165/');
  }
  return (
    <>
      <NavContainer>
        <h2>Portfolio<span>  Julián Osorio</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a  href="#h">Inicio</a>
          <a  href="#h">Curriculum vitae</a>
          <a  href="#h">Contacto</a>
          <img className="gitIconeImg" onClick={github} src={gitHupIcone} alt="" />
          <img className="gitIconeImg" onClick={linkedin} src={linkedinIcone} alt="" />
        </div>
        <div className='burguer'>
          <BurguerBtn clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    font-Family: "Atkinson";
    color: white;
    font-weight: 400;
    span{
      font-Family: "Atkinson";
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    font-Family: "Atkinson";
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    background-color: #000;
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`