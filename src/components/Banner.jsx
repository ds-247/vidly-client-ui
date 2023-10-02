import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import "../componentStyle/banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <div className="main-heading">
          <h1>
            Welcome to Vidly – Your Ultimate Destination for Endless
            Entertainment!
          </h1>
        </div>

        <div className="banner-discription">
          <h3>
            Explore Thousands of Movies and TV Shows, Dive into Top-Quality
            Content, and Start Your Movie Journey Today.
          </h3>
        </div>

        <div className="banner-button">
          <Link to="register">
            <Button variant="contained">
              <AddIcon sx={{ mr: 1 }} />
              Join for Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
