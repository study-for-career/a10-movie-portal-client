
const Slider = () => {
    return (
        <div>

            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ytimg.com/vi/UTAvGzCK6ok/maxresdefault.jpg"
                        className="w-full max-h-[500px] object-fill" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute left-[18%] lg:left-[40%] md:left-[30%] bottom-4 md:bottom-[20%] '>
                        <h1 className="animate__animated animate__lightSpeedInLeft  text-sm md:text-xl text-center text-pink-600 bg-slate-300 p-2">Experience breathtaking animation that <br></br>brings every detail to life </h1>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://www.brandsynario.com/wp-content/uploads/2024/03/Islamic-movie-1.jpg"
                        className="w-full max-h-[500px] object-fill" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute left-[18%] lg:left-[40%] md:left-[30%] bottom-4 md:bottom-[20%] '>
                        <h1 className="animate__animated animate__lightSpeedInLeft  text-sm md:text-xl text-center text-pink-600 bg-slate-50 p-2">Meet a cast of lovable characters that  <br></br>will make you laugh, cry, and cheer.</h1>
                    </div>

                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9vGnP3AdKwOCv5Phsj3S0aQVB4xG6vUsAg&s"
                        className="w-full max-h-[500px] object-fill" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute left-[18%] lg:left-[40%] md:left-[30%] bottom-4 md:bottom-[20%] '>
                        <h1 className="animate__animated animate__lightSpeedInLeft  text-sm md:text-xl text-center text-pink-600 bg-slate-300 p-2">Super animation movie <br></br>Action fun and much more. </h1>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Slider;