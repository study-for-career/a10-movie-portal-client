import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";


const YouMayLike = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
    }, [])


    return (
        <div className="p-5">
            <div>
                <h1 className="text-3xl text-pink-500 py-5">You May Like</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {
                        movies.slice(0, 6).map(movie => <div key={movie._id}>
                            <div className="group relative">
                                <Link to={`/movies/${movie?._id}`}>
                                    <img src={movie?.image} alt={movie?.title}
                                        className="w-full h-72 object-cover rounded-lg group-hover:opacity-20"
                                    />
                                    <button className="btn bg-pink-500 text-white border-none hover:bg-pink-500 absolute bottom-32 left-8 text-xl opacity-0 group-hover:opacity-100">Watch Now</button>
                                </Link>

                            </div>
                            <div>
                                <h2 className="text-xl">{movie?.title}</h2>
                                <h4 className="text-pink-500">{movie?.genre.join(', ')}</h4>
                                <h4>
                                    <FaStar className="inline mr-1 text-orange-500"></FaStar>
                                    {movie?.rating}
                                </h4>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default YouMayLike;