import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        movies.slice(0, 6).map(movie => <div key={movie._id}
                            className='md:grid grid-cols-2 gap-5'
                        >
                            <div>
                                <img src={movie?.image} alt={movie?.title} className='w-full h-72 object-cover rounded-lg' />
                            </div>
                            <div className='py-5 space-y-2'>
                                <Link to={`/movies/${movie?._id}`}><h2 className='text-xl font-bold hover:text-pink-500 transition'>{movie?.title}</h2></Link>
                                <h3 className='text-pink-500'>{movie?.genre.join(', ')}</h3>
                                <h3><FaStar className="inline text-yellow-500" />  {movie?.rating}</h3>
                                <p>{movie?.summary}</p>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default YouMayLike;