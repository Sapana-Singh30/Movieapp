import React, { useState } from "react";
import "./Header.css";
import movieicon from "../Resources/movieicon.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import Search from "./Search";
import Search_mobile from "./Search_mobile";


const Header = () => {

    const [click, setClick] = useState(false);
    const [mobileSearch, setMobileSearch] = useState(false);

    // if (click === false) {
    //     document.getElementsByClassName("active")[0].style.display = "none";
    // }

const handleHeading = () => {
    document.getElementsByClassName("active").style.display = "none";
}


    const handleClick = () => {
        // console.log("click",click)

        setClick(!click);
        // console.log("click",click)
        if (click === true) {

            document.getElementsByClassName("active")[0].style.display = "none";
        }
        else {
            if (mobileSearch === true) {
                document.getElementsByClassName("mobile_search_header")[0].style.display = "none";
                setMobileSearch(!mobileSearch);
            }

            document.getElementsByClassName("active")[0].style.display = "flex";

        }
        // 
    };


    const handleSearch = () => {
        setMobileSearch(!mobileSearch);
        if (mobileSearch === true) {

            document.getElementsByClassName("mobile_search_header")[0].style.display = "none";

        }
        else {
            if (click === true) {
                document.getElementsByClassName("active")[0].style.display = "none";
                setClick(!click);
            }

            document.getElementsByClassName("mobile_search_header")[0].style.display = "flex";
        }
    };




    // const renderClass = () => {
    //     let classs = "header-mid";
    //     if (click) {
    //         classs = "active";
    //     }
    //     return classs;
    // }
    // const[search, setsearch]= useState(false);

    // const hanleSearch = () => {
    // setsearch(!search);
    // };

    // const renderSearch = () =>{
    // let searchCls="searchBox";
    // if(search){
    //     searchCls="searchBox-active";
    // }
    // return searchCls;
    // };

    return (
        <>
            {/* <div className="header">
                <div className="headerLeft">
                    
                    <div><Link to="/"><Lottie className="movie_icon" animationData={movieicon} loop={true} /></Link></div>
                    <div className="left-heading">
                        <Link to="/movies/popular"><span>Popular</span></Link>
                        <Link to="/movies/toprated"><span>Top_Rated</span></Link>
                        <Link to="/movies/upcoming"><span>Upcoming</span></Link>
                    </div>
                </div>
                <div className="headerRight">
                    <input type="text" placeholder="search here!!!" />
                    <span>< BiSearch /></span>
                    <span>< BiMenuAltRight /></span>
    </div>
            </div> */}


            {/* <div className="maincontainer">
                <div className="subcontainer c1">
                    <Lottie className="movie_icon" animationData={movieicon} loop={true} />
                </div>
                <div className="subcontainer c2">
                    <div className="c2_1">
                        <Link to="/movies/popular" className="link">Popular</Link>
                    </div>
                    <div className="c2_2">
                        <Link to="/movies/popular" className="link">Top Rated</Link>
                    </div>
                    <div className="c2_3">
                        <Link to="/movies/popular" className="link">Upcoming</Link>
                    </div>
                </div>
                <div className="subcontainer c3">
                    <div className="c3_1">
                    <input type="text" placeholder="search here!!!" />
                    < BiSearch className="search" />
                     < BiMenuAltRight className="menu"/>
                   
                    </div>
                </div>
            </div> */}



            <div className="header">
                <div className="header-left">
                    <Lottie className="movie_icon" animationData={movieicon} loop={true} />
                </div>
                <div className="header-mid">
                    <Link to="/movies/popular" className="headings">Popular</Link>
                    <Link to="/movies/top_rated" className="headings">Top_Rated</Link>
                    <Link to="/movies/upcoming" className="headings">Upcoming</Link>
                </div>
                <div className="header-right">
                    <div className="searchBox"> <Search /> </div>
                    {/* <input type="text" className="searchBox" placeholder="search here!!!" /> */}
                    < BiSearch className="searchIcon" onClick={handleSearch} />
                    < BiMenuAltRight className="menu" onClick={handleClick} />
                </div>
            </div>
            <div className="active">
                <div className="mobile-heading">
                    <Link to="/movies/popular" className="active-headings" onClick={handleHeading}>Popular</Link>
                    <Link to="/movies/top_rated" className="active-headings" onClick={handleHeading}>Top_Rated</Link>
                    <Link to="/movies/upcoming" className="active-headings" onClick={handleHeading}>Upcoming</Link>
                </div>
            </div>
            <div className="mobile_search_header">
                <div className="mobile_search_midle">
                    <div className="mobile_search" >
                        {/* <input type="text" placeholder="Search here..."/>
                        < BiSearch className="mobile_searchIcon" /> */}
                        <Search_mobile />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Header;