import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {

    const toFacebook = () => {
        window.open('https://web.facebook.com/mdzahidulislam08/', '_blank')
    }
    const toInstagram = () => {
        window.open('https://www.instagram.com/', '_blank')
    }
    const toLinkedin = () => {
        window.open('https://bd.linkedin.com/', '_blank')
    }
    return (
        <footer className="bg-gray-800 text-white">
            <div className="flex-col md:flex md:flex-row space-y-2  justify-between items-center p-2 md:p-4">
                <Link to='/'>
                    <a className="uppercase text-md md:text-xl">Movie <span className="text-pink-500">Portal</span></a>
                </Link>


                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <aside className="grid-flow-col items-center">
                    <p>Contact Us: +013246433445-74 (UK-London)</p>
                </aside>
                <nav className="grid-flow-col flex gap-4 md:place-self-center md:justify-self-end">
                    <button className="text-2xl text-pink-500" onClick={toFacebook}><FaFacebook /></button>
                    <Link className="text-2xl text-pink-500" onClick={toInstagram} ><FaInstagram /></Link>
                    <Link className="text-2xl text-pink-500" onClick={toLinkedin} ><FaLinkedin /></Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;