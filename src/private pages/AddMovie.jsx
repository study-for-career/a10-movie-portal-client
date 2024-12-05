

const AddMovie = () => {
    const handleAddMovie = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const duration = form.duration.value;
        const release = form.release.value;
        const image = form.image.value;
        const summary = form.summary.value;

        const movieDetails = { title, duration, release, image, summary }

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

                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
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

                        <input type="number" name="release" placeholder="Release Year" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>

                        <input type="number" name="release" placeholder="Release Year" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>

                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>

                        <textarea className="textarea textarea-bordered h-24" name="summary" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control mt-6 md:col-span-2">
                        <button className="btn bg-pink-500 hover:bg-pink-500 hover:text-black text-white uppercase">Add Movie</button>
                    </div>
                </form>
            </div>




        </div>
    );
};

export default AddMovie;