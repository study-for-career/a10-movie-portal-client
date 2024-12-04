import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
