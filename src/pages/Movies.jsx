import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
    }, [])

    return (
        <div className="p-2">
            <h1 className="text-3xl text-pink-500 uppercase underline py-10 text-center">Browse Best Movies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    movies.map(movie => {

                        return <div key={movie._id} className="flex flex-col justify-between gap-3 shadow-md border-2 rounded-lg p-5">
                            <img
                                className="rounded-lg h-60"
                                src={movie?.image} alt={movie?.title} />
                            <h2 className="text-2xl font-bold">{movie?.title}</h2>

                            <h2 ><span className="font-bold">Release Date: </span >{movie?.release}</h2>
                            <h2 ><span className="font-bold">Movie Length: </span >{movie?.duration} min</h2>
                            <h2 ><span className="font-bold">Rating: </span >{movie?.rating}</h2>
                            <h2 ><span className="font-bold">Genre: </span >{movie?.genre.join(',  ')}</h2>

                            <Link to={`/${movie._id}`}
                                className="btn bg-pink-500 hover:bg-gray-800 w-full text-white">
                                See Details
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Movies;