import React from "react";
import MovieCard from "./MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../componentStyle/categorizedMovies.css";

function MovieSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1400, min: 850 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 850, min: 580 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <div className="slider-container">
        <Carousel className="slider-flex" responsive={responsive}>
          <div className="slider-item">
            <MovieCard />
          </div>
          <div className="slider-item">
            <MovieCard />
          </div>
          <div className="slider-item">
            <MovieCard />
          </div>
          <div className="slider-item">
            <MovieCard />
          </div>
          <div className="slider-item">
            <MovieCard />
          </div>
          <div className="slider-item">
            <MovieCard />
          </div>
          <div className="slider-item">
            <MovieCard />
          </div>
          <div className="slider-item">
            <MovieCard />
          </div>
          <div className="slider-item">
            <MovieCard />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default MovieSlider;
