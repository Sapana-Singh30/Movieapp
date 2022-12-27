import React, { useState, useEffect } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";


const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])


    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=a471d602091bc4350ae9376899f4158d&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])


    return (
        <>
            <div className="home-slider">
                <div className="slider-contnt">
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
                                    <div className='posterImage'>
                                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />

                                        <div className="overlay-header">
                                            <div className='posterImage_overlay'>
                                                {/* <div className='posterImage_title'>
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
                                            </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }

                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Home;