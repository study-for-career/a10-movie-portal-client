import { useState } from "react";
// import UserRating from "../components/UserRating";
import { Rating } from 'react-simple-star-rating';

const AddMovie = () => {


    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate)
    }

    const [error, setError] = useState('');

    const handleAddMovie = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = parseInt(form.duration.value);
        const release = parseInt(form.release.value);
        const image = form.image.value;
        const summary = form.summary.value;
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
            setError('Summary must be greaterthan 10')
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
        if (genre === 'Select a genre') {
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

        const movieDetails = { title, duration, release, image, summary, rating, genre }
        console.log(movieDetails);

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

                        <select className="select select-bordered" name="genre">
                            <option disabled selected>Select a genre</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Duration</span>
                        </label>

                        <input type="number" name="duration" placeholder="Duration" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Release Year</span>
                        </label>

                        <select className="select select-bordered" name="release" >
                            <option disabled selected>Select a Year</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
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
                        {/* <UserRating></UserRating> */}
                        {/* <input type="number" name="release" placeholder="Release Year" className="input input-bordered" required /> */}

                        <Rating onClick={handleRating} initialValue={rating} className='inline' />
                    </div>





                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>

                        <textarea className="textarea textarea-bordered h-24" name="summary" placeholder="Bio"></textarea>
                    </div>

                    {
                        error ? <p className="text-red-500">{error}</p> : console.log('ok')
                    }

                    <div className="form-control mt-6 md:col-span-2">
                        <button className="btn bg-pink-500 hover:bg-pink-500 hover:text-black text-white uppercase">Add Movie</button>
                    </div>
                </form>
            </div>




        </div>
    );
};

export default AddMovie;