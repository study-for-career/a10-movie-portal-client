import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieTable = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
    }, [])

    const topRankedMovies = movies.sort((a, b) => b.rating - a.rating)

    return (

        <div className='p-5'>
            <h1 className="text-3xl text-pink-500 py-5">Top Reviews Movies</h1>
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
                            topRankedMovies.slice(0, 10).map(movie => <tr key={movie._id}
                                className='hover:bg-gray-100'
                            >
                                {/* <td className="text-bold text-blue-500 md:text-lg hover:text-pink-500 transition-colors"><Link to={`/movies/${movie?._id}`}>{movie?.title}</Link></td> */}
                                <Link to={`/movies/${movie?._id}`}><td className="text-bold text-blue-500 md:text-lg hover:text-pink-500 transition-colors">{movie?.title}</td></Link>
                                <td>{movie?.release}</td>
                                <td className="hidden md:block">{movie?.duration}</td>
                                <td>{movie?.rating}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MovieTable;