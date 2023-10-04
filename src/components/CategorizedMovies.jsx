import React from "react";
import MovieSlider from "./MovieSlider";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../componentStyle/categorizedMovies.css";

function CategorizedMovies({ moviesData, genresData: genres }) {
  return (
    <>
      {genres.map((genre) => (
        <div key={genre._id}>
          {" "}
          <div className="movie-category">
            <h3>
              {genre.name} <KeyboardArrowRightIcon />
            </h3>
            <MovieSlider moviesData={moviesData} />
          </div>
          <div className="catMovie-divider"></div>
        </div>
      ))}
    </>
  );
}

export default CategorizedMovies;
