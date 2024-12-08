import { useState } from "react";
import { Rating } from 'react-simple-star-rating';
import { MultiSelect } from "react-multi-select-component";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddMovie = () => {
    const { user } = useContext(AuthContext)
    const { email } = user;
    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate)
    }
    const [selected, setSelected] = useState([])
    const options = [
        { label: "Animation", value: "Animation" },
        { label: "Adventure", value: "Adventure" },
        { label: "Comedy", value: "Comedy" },
        { label: "Fantasy", value: "Fantasy" },
        { label: "Drama", value: "Drama" },
        { label: "Family", value: "Family" },
        { label: "Action", value: "Action" },
    ];


    const [error, setError] = useState('');

    const notify = () => {
        toast.error("Failed to Add Movie", {
            position: "top-center"
        })
    }
    const notify2 = () => {
        toast.success("Movie Added Successfully", {
            position: "top-center"
        })
    }

    const handleAddMovie = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        // const genre = form.genre.value;
        const duration = parseInt(form.duration.value);
        const release = parseInt(form.release.value);
        const image = form.image.value;
        const summary = form.summary.value;

        const genre = selected.map(select => select.value)

        setError('')

        if (title.length < 2) {
            setError('Title length must be greater than 2')
            return
        }
        if (duration < 60) {
            setError('Video length must be greater than 60')
            return
        }
        if (summary.length < 10) {
            setError('Summary must be greater than 10')
            return
        }
        if (rating === 0) {
            setError('You must apply rating')
            return
        }
        if (!release || release === 'default') {
            setError('Please select a Year');
            return;
        }
        if (genre.length < 1) {
            setError('Please select a Genre.');
            return;
        }
        const imgValidation = () => {
            try {
                new URL(image)
                return true
            } catch {
                return false
            }
        }

        if (!imgValidation()) {
            setError('Image URL is not valid');
            return;
        }

        const movieDetails = { email, title, duration, release, image, summary, rating, genre }

        fetch('https://movie-portal-server-seven.vercel.app/movies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(movieDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    notify2()
                    form.reset()
                } else {
                    notify()
                }
            })
    }


    return (
        <div className="py-10 px-2 md:px-16">

            <div>
                <div className="text-center">
                    <h1 className="text-3xl text-pink-500">Add Your Movie Here</h1>
                </div>
                <form onSubmit={handleAddMovie} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Movie Title</span>
                        </label>

                        <input type="text" name="title" placeholder="Movie Title" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Genre</span>
                        </label>

                        <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                        />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Duration (min)</span>
                        </label>

                        <input type="number" name="duration" placeholder="Duration" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Release Year</span>
                        </label>

                        <select className="select select-bordered" name="release" >
                            <option disabled defaultValue={'Select a Year'}>Select a Year</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>

                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>

                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>


                        <Rating onClick={handleRating} initialValue={rating} className='inline' />
                    </div>





                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>

                        <textarea className="textarea textarea-bordered h-24" name="summary" placeholder="Bio"></textarea>
                    </div>

                    {
                        error ? <p className="text-red-500">{error}</p> : ''
                    }

                    <div className="form-control mt-6 md:col-span-2">
                        <button className="btn bg-pink-500 hover:bg-pink-500 hover:text-black text-white uppercase">Add Movie</button>
                    </div>
                </form>


            </div>


            <ToastContainer></ToastContainer>

        </div>
    );
};

export default AddMovie;