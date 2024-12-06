import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../private pages/AuthProvider";

const Navbar = () => {

    const { logoutUser, user } = useContext(AuthContext)

    const menuLists = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/movies'>All Movies</NavLink></li>
        <li><NavLink to='/'>Categories</NavLink></li>
        <li><NavLink to='/favourite_movies'>My Favourites</NavLink></li>
        <li><NavLink to='/add-movie'>Add Movie</NavLink></li>


    </>

    const menuListsDropdown = <>
        <li><Link to='/movies'>All Movies</Link></li>
        <li><Link to='/'>Categories</Link></li>
        <li><Link to='/favourite_movies'>My Favourites</Link></li>
        <li><Link to='/add-movie'>Add Movie</Link></li>
    </>

    const handleLogout = () => {
        logoutUser()
            .then(() => {

            })
            .catch(err => {

            })
    }

    return (
        <div className="flex justify-between items-center bg-gray-800 text-white p-2">
            <div>
                <Link to='/'>
                    <a className="uppercase text-md md:text-xl">Movie <span className="text-pink-500">Portal</span></a>
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <div className="block lg:hidden">
                    <ul className="flex gap-4">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li className={user ? 'hidden' : 'block'}><NavLink to='/login'>Login</NavLink></li>
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-4">

                        {
                            menuLists
                        }

                        <li className={user ? 'hidden' : 'block'}><NavLink to='/login'>Login</NavLink></li>
                        <li className={user ? 'hidden' : 'block'}><NavLink to='/register'>Register</NavLink></li>
                    </ul>


                </div>
                {/* Dropdown for menulists */}
                <div className="dropdown dropdown-end ">

                    {/* After login Area */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:hidden flex ">
                        <div className="flex items-center justify-center">
                            <FaBars className="w-5 h-5"></FaBars>
                        </div>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-auto p-2 shadow lg:hidden block">
                        {
                            menuListsDropdown
                        }

                    </ul>
                </div>

                {/* Dropdown for all devices */}
                <div className={user ? "dropdown dropdown-end " : "hidden"}>

                    {/* After login Area */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">

                        <div className="w-10 rounded-full">

                            <img
                                alt="User Profile"
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-auto p-2 shadow bg-gray-800 text-white">
                        <li><title>{user?.displayName}</title></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;