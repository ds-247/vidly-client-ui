import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Button } from "@mui/material";
import "../componentStyle/moviePage.css";

function MoviePage() {
  const location = useLocation();
  const { movieData } = location.state;

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
          <Button variant="contained" sx={{ width: " 200px", mb: 2 }}>
            <CurrencyRupeeIcon sx={{ mr: 1 }} />
            Rent
          </Button>
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
