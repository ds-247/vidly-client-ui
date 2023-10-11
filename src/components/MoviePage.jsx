import React from "react";
import { rent } from "../services/rentalService";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import auth from "./../services/authService";
import Confirmation from "./Confirmation";
import SmoothScrollingToTop from "./moviesTableUtil/SmoothScrollingToTop";
import "../componentStyle/moviePage.css";

function MoviePage() {
  const history = useHistory(); // Initialize the history object
  const location = useLocation();
  const { movieData } = location.state;

  SmoothScrollingToTop();

  const handleRental = () => {
    // can't use redirect (client side rendering with in the function directly for that use this ...)
    const user = auth.getCurrentUser();

    if (!user) {
      history.push("/login");
    } else {
      rent(movieData);
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
          <Confirmation
            label={"Rent"}
            title={"title"}
            rate={"dailyRentalRate"}
            movie={movieData}
            onClick={handleRental}
          />
        </div>
        <div className="movie-discription">
          <p>
            {movieData.title} -- follows strong man's battle against the enemy,
            a chaotic mastermind. Ledger's enemy challenges strong man's morals
            in a dark and iconic exciting film.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
