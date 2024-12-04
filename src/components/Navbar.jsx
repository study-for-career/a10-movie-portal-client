import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {

    const menuLists = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>All Movies</NavLink></li>
        <li><NavLink to='/'>Categories</NavLink></li>
        <li><NavLink to='/'>My Favorites</NavLink></li>
        <li><NavLink to='/'>Add Movie</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/'>Register</NavLink></li>

    </>

    const menuListsDropdown = <>
        <li><Link to='/'>All Movies</Link></li>
        <li><Link to='/'>Categories</Link></li>
        <li><Link to='/'>My Favorites</Link></li>
        <li><Link to='/'>Add Movie</Link></li>
    </>

    return (
        <div className="flex justify-between items-center bg-gray-800 text-white">
            <div>
                <Link to='/'>
                    <a className="btn btn-ghost uppercase text-md md:text-xl">Movie <span className="text-pink-500">Portal</span></a>
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <div className="block lg:hidden">
                    <ul className="flex gap-4">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>Login</NavLink></li>
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-4">

                        {
                            menuLists
                        }
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
                <div className="dropdown dropdown-end ">

                    {/* After login Area */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                        <div className="w-10 rounded-full ">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-auto p-2 shadow bg-gray-800 text-white">

                        <li><a>Logout</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;