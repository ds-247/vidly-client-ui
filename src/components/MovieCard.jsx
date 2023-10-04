import React from "react";
import { Link } from "react-router-dom";
import "../componentStyle/movieCard.css";

function MovieCard({ movieData: movie }) {
  return (
    <>
      <div className="movie-slider-card">
        <Link
          to={{
            pathname: `movie/${movie._id}`,
            state: { movieData: movie },
          }}
        >
          <img src={movie.movieImage} alt="Movie Poster"></img>
        </Link>
      </div>
    </>
  );
}

export default MovieCard;
