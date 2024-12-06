import { FaStar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
    const movieDetails = useLoaderData()

    const { title, duration, release, image, summary, rating, genre } = movieDetails;


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2 py-5 md:p-10">
            <div className="space-y-3">
                <h1 className="text-4xl lg:text-6xl font-bold text-pink-500">{title}</h1>
                <h2><span className=" text-xl text-pink-500">Release Date: </span >{release}</h2>
                <h2><span className=" text-xl text-pink-500">Movie Length: </span >{duration} min</h2>
                <h2 className="flex items-center ">
                    <span className=" text-xl text-pink-500 mr-2">Rating:  </span >
                    <FaStar className="inline text-yellow-500" />
                    {rating}
                </h2>
                <h2><span className=" text-xl text-pink-500">Genre: </span >{genre.join(',  ')}</h2>
                <p><span className=" text-xl text-pink-500">Summary: </span >{summary}</p>
                <button className="btn bg-pink-500 text-white hover:bg-gray-800 mr-3"> Add to Favourite</button>
                <button className="btn btn-error"> Delete Movie</button>
            </div>
            <div className="h-60">
                <img
                    className="rounded-lg h-60 lg:h-96 w-full"
                    src={image} alt={title} />
            </div>
        </div>
    );
};

export default MovieDetails;