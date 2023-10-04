import React from "react";
import MovieCard from "./MovieCard";
import "../componentStyle/movieSlider.css";

function MovieSlider({ moviesData: movies }) {
  return (
    <div className="movies-cards-container">
      {movies.map((movie) => (
        <MovieCard key={movie._id} movieData={movie} />
      ))}
    </div>
  );
}

export default MovieSlider;
