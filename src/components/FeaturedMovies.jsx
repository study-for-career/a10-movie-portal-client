import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const FeaturedMovies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://movie-portal-server-seven.vercel.app/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
    }, [])

    const topRankedMovies = movies.sort((a, b) => b.rating - a.rating)

    return (
        <div className="p-5">
            <div>
                <h1 className="text-3xl text-pink-500 py-5">Featured Movies</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        topRankedMovies.slice(0, 6).map(movie => <div key={movie._id}
                            className='md:grid grid-cols-2 gap-5 border-2 border-pink-200 rounded-lg p-5 items-stretch'
                        >
                            <div>
                                <img src={movie?.image} alt={movie?.title} className='w-full h-72 object-cover rounded-lg' />
                            </div>
                            <div className='space-y-2 flex flex-col justify-between'>
                                <Link to={`/movies/${movie?._id}`}><h2 className='text-xl font-bold hover:text-pink-500 transition'>{movie?.title}</h2></Link>
                                <h2 ><span className="font-bold">Release Year: </span >{movie?.release}</h2>
                                <h2 ><span className="font-bold">Movie Length: </span >{movie?.duration} min</h2>
                                <h2 ><span className="font-bold">Rating: </span >{movie?.rating}</h2>
                                <h2 ><span className="font-bold">Genre: </span >{movie?.genre.join(',  ')}</h2>

                                <Link to={`/movies/${movie._id}`}
                                    className="btn bg-pink-500 hover:bg-gray-800 w-full text-white">
                                    See Details
                                </Link>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default FeaturedMovies;