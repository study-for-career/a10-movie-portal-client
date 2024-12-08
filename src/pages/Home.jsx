import MovieTable from "../components/MovieTable";
import Slider from "../components/Slider";
import FeaturedMovies from "../components/FeaturedMovies";
import YouMayLike from "../components/YouMayLike";
import { useContext } from "react";
import { AuthContext } from "../private pages/AuthProvider";

const Home = () => {

  const { theme } = useContext(AuthContext)

  return (
    <div data-theme={theme}>

      <Slider></Slider>
      <FeaturedMovies></FeaturedMovies>
      <YouMayLike></YouMayLike>
      <MovieTable></MovieTable>

    </div>
  );
};

export default Home;
