import "./Footer.css";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import movieicon from "../Resources/movieicon.json";
import Lottie from "lottie-react";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_menu">
                    <div className="footer_menu_heading">
                        <h2>MENU</h2>
                    </div>
                    <div className="footer_menu_data">
                        <Link to="/movies/popular" >Popular</Link>
                        <Link to="/movies/toprated" >Top Rated</Link>
                        <Link to="/movies/upcoming" >Upcoming</Link>
                    </div>
                </div>
                <div className="footer_contact">
                    <div className="footer_contact_heading">
                        <h2>CONNECT US</h2>
                    </div>
                    <div className="footer_contact_data">
                        <Link to=""><AiFillInstagram /></Link>
                        <Link to=""><AiFillFacebook /></Link>
                        <Link to=""><AiFillYoutube /></Link>
                        <Link to=""><AiFillLinkedin /></Link>
                    </div>
                </div>
                <div className="footer_logo_copyright">
                    <div className="footer_logo">
                        <Lottie className="movie_icon" animationData={movieicon} loop={true} />
                    </div>
                    <div className="footer_copyright">
                        <p>Reowned brand to incorporate  </p>
                        <p>Joy to your life</p>
                        <small>copyright@2022|All rights reserved.</small>
                        <p>Designed and Developed by Sapana Singh</p>
                    </div>
                </div>
            
        </div>
        </>
    )
}

export default Footer;