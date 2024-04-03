import { Routes, Route } from "react-router-dom";
import Portfolio from "../components/Portfolio";


function Main(props) {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Portfolio/>} />
      </Routes>
    </div>
  );
}

export default Main;