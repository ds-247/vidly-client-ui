import React from "react";
import { rent } from "../services/rentalService";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import auth from "./../services/authService";
import MoviePopUp from "./MoviePopUp";
import SmoothScrollingToTop from "./moviesTableUtil/SmoothScrollingToTop";
import "../componentStyle/moviePage.css";

function MoviePage() {
  const history = useHistory(); // Initialize the history object
  const location = useLocation();
  const { movieData } = location.state;

  SmoothScrollingToTop();

  const handleRental = async () => {
    // can't use redirect (client side rendering with in the function directly for that use this ...)
    const user = auth.getCurrentUser();

    if (!user) {
      history.push("/login");
    } else {
      await rent(movieData);
    }
  };

  return (
    <div className="movie-page-container">
      <div className="img-wrapper">
        <img src={movieData.movieImage} alt="Movie-Poster" />
      </div>
      <div className="options">
        <div className="buttons">
          <Button variant="contained" sx={{ width: " 200px", mb: 2 }}>
            <PlayArrowIcon sx={{ mr: 1 }} />
            Watch Trailer
          </Button>
          <Button variant="contained" sx={{ width: " 200px", mb: 2 }}>
            <AddIcon sx={{ mr: 1 }} />
            Add To List
          </Button>
          <MoviePopUp onRental={handleRental} />
        </div>
        <div className="movie-discription">
          <p>
            The Dark Knight" (2008) follows Batman's battle against the Joker, a
            chaotic criminal mastermind. Ledger's Joker challenges Batman's
            morals in a dark and iconic superhero film.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
