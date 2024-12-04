import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
