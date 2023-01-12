import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Fruit from "./fruit.jpg";

import "./HomeSwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  const [popularMovies, setPopularMovies] = useState([])


  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=a471d602091bc4350ae9376899f4158d&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, [])
  console.log(popularMovies)
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {popularMovies.map((e, index) => {
          if(index < 10)
          {
          return (
            
            <SwiperSlide onClick={()=>{navigate(`/movie/${popularMovies[index].id}`)}}>

              <div className="container1">
                <div className="image">
                  <img src={`https://image.tmdb.org/t/p/original${popularMovies && popularMovies[index].backdrop_path}`} alt="" />
                </div>
                <div className="container_cntnt">
                  <div className="container_cntnt_header">
                    <div className="poster_title">
                     {popularMovies[index].title}
                    </div>
                    <div className="daterating">
                      <div className="poster_date">
                      {popularMovies[index].release_date}
                      </div>
                      <div className="poster_rating">
                        {popularMovies[index].vote_average}
                        <i className="fas fa-star icn" />
                      </div>
                    </div>

                    <div className="poster_description">
                      {popularMovies[index].overview}
                    </div>
                  </div>
                </div>
              </div>
            
            </SwiperSlide>
   

          )
          }
          })
        
        }
        {/* {popularMovies.map(movie => (return(<>hello</>))) */}
        {/* <SwiperSlide>
          <div className="container1">
            <div className="image">
              <img src={Fruit} alt="" />
            </div>
            <div className="container_cntnt">
              <div className="container_cntnt_header">
                <div className="poster_title">
                  title
                </div>
                <div className="daterating">
                  <div className="poster_date">
                    date
                  </div>
                  <div className="poster_rating">
                    rating
                  </div>
                </div>

                <div className="poster_description">
                  description dtfgthy hygjhbj hgbjhbj ghvbhb hjbhbjk
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
