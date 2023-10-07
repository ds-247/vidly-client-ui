import React from "react";
import "../componentStyle/movieDivider.css";

function MovieDivider({ text }) {
  return (
    <div className="movie-divider">
      <div className="divider-line"></div>
      <div className="divider-text">{text}</div>
      <div className="divider-line"></div>
    </div>
  );
}

export default MovieDivider;
