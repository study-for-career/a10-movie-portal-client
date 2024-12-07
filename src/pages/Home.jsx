import MovieTable from "../components/MovieTable";
import Slider from "../components/Slider";
import FeaturedMovies from "../components/FeaturedMovies";
import YouMayLike from "../components/YouMayLike";

const Home = () => {

  return (
    <div>

      <Slider></Slider>
      <FeaturedMovies></FeaturedMovies>
      <YouMayLike></YouMayLike>
      <MovieTable></MovieTable>

    </div>
  );
};

export default Home;
