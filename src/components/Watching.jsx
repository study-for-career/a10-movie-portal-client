import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Watching = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
    }, [])

    const topRankedMovies = movies.sort((a, b) => b.rating - a.rating)

    console.log(topRankedMovies)

    return (
        <div className="p-5">
            <div>
                <h1 className="text-3xl text-pink-500 py-5">Now Watching</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {
                        movies.map(movie => <div key={movie._id}>
                            <div>
                                <img src={movie?.image} alt={movie?.title}
                                    className="w-full h-72 object-cover rounded-lg"
                                />

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

                <h1 className="text-3xl text-pink-500 py-5">Top Reviews Movies</h1>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Movie Name</th>
                                    <th>Release Year</th>
                                    <th className="hidden md:block">Duration (min)</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    topRankedMovies.slice(0, 2).map(movie => <tr key={movie._id}>
                                        <td className="text-bold text-blue-500 md:text-lg"><Link to={`/movies/${movie?._id}`}>{movie?.title}</Link></td>
                                        <td>{movie?.release}</td>
                                        <td className="hidden md:block">{movie?.duration}</td>
                                        <td>{movie?.rating}</td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watching;