import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Movies = () => {

    const movies = useLoaderData()

    const [searchedMovies, setSearchedMovies] = useState(movies)

    const handleSearch = (e) => {
        const inputValue = e.target.value.toLowerCase();
        const filter = movies.filter(movie => movie.title.toLowerCase().includes(inputValue));
        setSearchedMovies(filter)
    }

    return (
        <div className="p-2">
            <h1 className="text-3xl text-pink-500 uppercase underline py-10 text-center">Browse Best Movies</h1>
            <div className="md:w-1/2 lg:w-1/4 py-3 mb-5 mx-auto">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" onKeyUp={handleSearch} id="search" className="grow" placeholder="Find Your Best Movies" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            {
                searchedMovies.length !== 0
                    ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            searchedMovies.map(movie => {

                                return <div key={movie._id} className="flex flex-col justify-between gap-3 shadow-md border-2 rounded-lg p-5">
                                    <img
                                        className="rounded-lg h-60"
                                        src={movie?.image} alt={movie?.title} />
                                    <h2 className="text-2xl font-bold">{movie?.title}</h2>

                                    <h2 ><span className="font-bold">Release Year: </span >{movie?.release}</h2>
                                    <h2 ><span className="font-bold">Movie Length: </span >{movie?.duration} min</h2>
                                    <h2 ><span className="font-bold">Rating: </span >{movie?.rating}</h2>
                                    <h2 ><span className="font-bold">Genre: </span >{movie?.genre.join(',  ')}</h2>

                                    <Link to={`/movies/${movie._id}`}
                                        className="btn bg-pink-500 hover:bg-gray-800 w-full text-white">
                                        See Details
                                    </Link>
                                </div>
                            })

                        }
                    </div>
                    :
                    <div>
                        <h1 className="text-3xl text-center text-gray-800">Sorry, Nothing Found.....</h1>
                    </div>
            }

        </div>
    );
};

export default Movies;