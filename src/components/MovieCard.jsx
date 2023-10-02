import React from "react";
import { Link } from 'react-router-dom';
import tempmovie from "../image.jpg";
import "../componentStyle/movieCard.css";

function MovieCard() {
  return (
    <div className="movie-card-container">
      <div className="card-img">
        <Link to="movie">
          <img src={tempmovie} alt="movie_img"></img>
        </Link>
      </div>
      <div className="card-box"></div>
    </div>
  );
}

export default MovieCard;
