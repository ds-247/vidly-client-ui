import React from "react";
import posterOne from "../assets/cara-poster-one.jpg";
import posterTwo from "../assets/cara-poster-two.jpg";
import posterThree from "../assets/cara-poster-three.jpg";

function MovieCarousel() {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={posterOne} className="d-block w-100" alt="movie-poster" />
          </div>
          <div className="carousel-item">
            <img src={posterTwo} className="d-block w-100" alt="movie-poster" />
          </div>
          <div className="carousel-item">
            <img
              src={posterThree}
              className="d-block w-100"
              alt="movie-poster"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default MovieCarousel;
