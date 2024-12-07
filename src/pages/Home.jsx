import MovieTable from "../components/MovieTable";
import Slider from "../components/Slider";
import FeaturedMovie from "../components/FeaturedMovie";
import YouMayLike from "../components/YouMayLike";

const Home = () => {

  return (
    <div>

      <Slider></Slider>
      <FeaturedMovie></FeaturedMovie>
      <YouMayLike></YouMayLike>
      <MovieTable></MovieTable>

    </div>
  );
};

export default Home;
