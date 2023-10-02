import React from "react";
import MovieSlider from "./MovieSlider";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function CategorizedMovies({ category }) {
  return (
    <>
      <div className="movie-category">
        <h3>
          {category} <KeyboardArrowRightIcon />
        </h3>
        <MovieSlider />
      </div>
      <div className="catMovie-divider"></div>
      <div className="movie-category">
        <h3>
          {category} <KeyboardArrowRightIcon />
        </h3>
        <MovieSlider />
      </div>
      <div className="catMovie-divider"></div>
      <div className="movie-category">
        <h3>
          {category} <KeyboardArrowRightIcon />
        </h3>
        <MovieSlider />
      </div>
      <div className="catMovie-divider"></div>
      <div className="movie-category">
        <h3>
          {category} <KeyboardArrowRightIcon />
        </h3>
        <MovieSlider />
      </div>
    </>
  );
}

export default CategorizedMovies;
