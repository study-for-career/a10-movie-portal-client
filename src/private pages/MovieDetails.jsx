import { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./AuthProvider";


const MovieDetails = () => {
    const { user } = useContext(AuthContext)
    const email = user.email;
    const movieDetails = useLoaderData()
    const { _id, title, duration, release, image, summary, rating, genre } = movieDetails;


    const notify = () => {
        toast.error("Failed to Add Favourite", {
            position: "top-center"
        })
    }
    const notify2 = () => {
        toast.success("Added to Favourite Successfully", {
            position: "top-center"
        })
    }
    const notifyDelete = () => {
        toast.success("Movie Successfully Deleted", {
            position: "top-center"
        })
    }
    const notifyDeleteFailed = () => {
        toast.error("Failed to Delete", {
            position: "top-center"
        })
    }

    const favouriteMovieData = { email, title, duration, release, image, summary, rating, genre }

    const handleAddToFavourite = (favouriteMovie) => {
        fetch('http://localhost:5000/favourite_movies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(favouriteMovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    notify2()
                } else {
                    notify()
                }
            })


    }

    const navigate = useNavigate()
    const handleDeleteMovie = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/movies/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    notifyDelete()
                    setTimeout(() => {
                        navigate('/movies')
                    }, 2000)
                } else {
                    notifyDeleteFailed()
                }
            })
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2 py-5 md:p-10">
                <div className="space-y-3 order-2 md:order-1">
                    <h1 className="text-4xl lg:text-6xl font-bold text-pink-500">{title}</h1>


                    <button onClick={() => handleAddToFavourite(favouriteMovieData)} className="btn bg-pink-500 text-white hover:bg-gray-800"> Add to Favourite</button>
                    <Link to={`/update/${_id}`}> <button className="btn bg-pink-500 text-white hover:bg-gray-800"> Update Movie</button></Link>



                    <h2><span className=" text-xl text-pink-500">Release Year: </span >{release}</h2>
                    <h2><span className=" text-xl text-pink-500">Movie Length: </span >{duration} min</h2>
                    <h2 className="flex items-center ">
                        <span className=" text-xl text-pink-500 mr-2">Rating:  </span >
                        <FaStar className="inline text-yellow-500" />
                        {rating}
                    </h2>
                    <h2><span className=" text-xl text-pink-500">Genre: </span >{genre.join(',  ')}</h2>
                    <p><span className=" text-xl text-pink-500">Summary: </span >{summary}</p>
                    <div className="text-center">

                        <button onClick={() => handleDeleteMovie(_id)} className="btn btn-error w-full"> Delete Movie</button>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <img
                        className="rounded-lg h-60 lg:h-96 w-full"
                        src={image} alt={title} />
                </div>

            </div>
            <div className="w-36 mx-auto py-10">
                <Link to='/movies' className="btn uppercase bg-gray-800 text-white  hover:bg-gray-700">See all movies</Link>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MovieDetails;