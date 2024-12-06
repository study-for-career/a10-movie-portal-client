import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../private pages/AuthProvider";
import Loader from "../components/Loader";


const Home = () => {
  const { loader } = useContext(AuthContext)

  if (loader) {
    return <Loader></Loader>
  }
  return (
    <div>

      <Slider></Slider>


    </div>
  );
};

export default Home;
