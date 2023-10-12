import React from "react";
import Banner from "./Banner";
import Title from "./Title";
import MovieCarousel from "./MovieCarousel";
import CategorizedMovies from "./CategorizedMovies";
import SubscribeBanner from "./SubscribeBanner";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SmoothScrollingToTop from "./moviesTableUtil/SmoothScrollingToTop";
import "../componentStyle/home.css";

function Home({ moviesData, genresData }) {
  SmoothScrollingToTop();
  console.log(moviesData);
  return (
    <div className="home-main">
      <Banner />
      <div className="home-container">
        <Title text={"So what you watching today !"} />
        {moviesData.length === 0 ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <CategorizedMovies
              moviesData={moviesData}
              genresData={genresData}
            />
            <MovieCarousel />
            <SubscribeBanner />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
