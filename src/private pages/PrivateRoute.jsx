import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Footer from "../components/Footer";
import NotLogged from "../components/NotLogged";
import Loader from "../components/Loader";

const PrivateRoute = () => {
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return <Loader></Loader>
    }

    return (
        <div>
            <Navbar></Navbar>
            {
                user ? <Outlet></Outlet> : <NotLogged></NotLogged>
            }
            <Footer></Footer>
        </div>
    );
};

export default PrivateRoute;