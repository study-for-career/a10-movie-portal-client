import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer } from "react-toastify";


const Favourites = () => {
    const { user } = useContext(AuthContext)
    const [favouriteMovies, setFavouriteMovie] = useState([])

    const notify = () => {
        toast.error("Failed to Delete", {
            position: "top-center"
        })
    }
    const notify2 = () => {
        toast.success("Movie Deleted Successfully", {
            position: "top-center"
        })
    }

    useEffect(() => {
        fetch(`https://movie-portal-server-seven.vercel.app/favourite_movies/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setFavouriteMovie(data)
            })
    }, [])

    // Delete Favourite Movie
    const handleDeleteFavourite = (id) => {
        console.log(id)
        fetch(`https://movie-portal-server-seven.vercel.app/favourite_movies/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const newfavorite = favouriteMovies.filter(favorite => favorite._id !== id)
                    setFavouriteMovie(newfavorite)
                    notify2()
                } else {
                    notify()
                }
            })
    }

    return (
        <div>
            <div className="p-2">
                <h1 className="text-3xl text-pink-500 uppercase py-10 text-center">My Favourite Movies</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        favouriteMovies.map(favouriteMovie => {

                            return <div key={favouriteMovie._id} className="flex flex-col justify-between gap-3 shadow-md border-2 rounded-lg p-5">
                                <img
                                    className="rounded-lg h-60"
                                    src={favouriteMovie?.image} alt={favouriteMovie?.title} />
                                <h2 className="text-2xl font-bold text-pink-500">{favouriteMovie?.title}</h2>

                                <h2 ><span className="font-bold">Release Year: </span >{favouriteMovie?.release}</h2>
                                <h2 ><span className="font-bold">Movie Length: </span >{favouriteMovie?.duration} min</h2>
                                <h2 ><span className="font-bold">Rating: </span >{favouriteMovie?.rating}</h2>
                                <h2 ><span className="font-bold">Genre: </span >{favouriteMovie?.genre.join(',  ')}</h2>

                                <button onClick={() => handleDeleteFavourite(favouriteMovie._id)} className="btn btn-error font-bold  ">Delete Favourite</button>
                            </div>
                        })
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Favourites;