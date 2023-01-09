import React, { useState, useEffect } from "react";
import "./New.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
// import Footer from "../Footer/Footer";

const New = () => {
    const [popularMovies, setPopularMovies] = useState([])


    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=a471d602091bc4350ae9376899f4158d&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="main_slider">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>


                                <div className="header_sub">
                                    <div className="sub">
                                      {/* <div className="sub_poster"> */}
                                        <img className="poster" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                        {/* fgtfvhgbjh */}
                                        {/* </div> */}
                                        <div className="overlay-header">
                                            <div id="col-rvrs" className="overlay">
                                                <div className='posterImage_title'>
                                                    {movie ? movie.original_title : ""}
                                                </div>

                                                <div className='posterImage_runtime'>
                                                    {movie ? movie.release_date : ""}

                                                    <span className='posterImage_rating'>
                                                        {movie ? movie.vote_average : ""}
                                                        <i className='fas fa-star' />{" "}
                                                    </span>
                                                </div>
                                                <div className='posterImage_description'>
                                                    {movie ? movie.overview : ""}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </ Carousel>
                <MovieList />
            </div>
            
        </>
    )
}

export default New;