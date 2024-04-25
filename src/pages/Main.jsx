import { Routes, Route } from "react-router-dom";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact"


function Main(props) {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Portfolio/>} />
       <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default Main;