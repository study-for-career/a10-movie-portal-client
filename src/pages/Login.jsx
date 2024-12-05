import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../private pages/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(result => {
                
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    const handleGoogleLogin = () => {
        console.log('I will do it later')
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div>
            <div className="bg-base-200 min-h-screen">
                <div className="hero-content">
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">

                        <div className="text-center py-3">
                            <Link to='/'><a className="uppercase text-md md:text-xl">Movie <span className="text-pink-500">Portal</span></a></Link>
                        </div>

                        <h2 className='text-center text-3xl py-3'>Login to Continue</h2>

                        <button onClick={handleGoogleLogin} className="btn uppercase text-blue-600 w-60 mx-auto mb-5"><FcGoogle className="text-xl"></FcGoogle> Login With Google</button>
                        <p className="text-center"> OR </p>
                        <hr />
                        <form onSubmit={handleLogin} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />

                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                                <span onClick={handleShowPassword} className='absolute right-4 bottom-12'>
                                    {
                                        !showPassword ? <FaEye></FaEye> : <FaEyeSlash />

                                    }
                                </span>


                                <label className="label">
                                    <Link to="/" href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-500 hover:bg-pink-500 hover:text-black text-white uppercase">Login</button>
                            </div>
                            <p>Don't have an account? <Link to='/register' className='text-pink-700'>Register Now</Link>  </p>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;