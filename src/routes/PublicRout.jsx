import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useContext } from "react";
import { AuthContext } from "../private pages/AuthProvider";


const PublicRout = () => {

    const { loader } = useContext(AuthContext)

    if (loader) {
        return <Loader></Loader>
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PublicRout;