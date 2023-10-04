import React from "react";
import Banner from "./Banner";
import Title from "./Title";
import MovieCarousel from "./MovieCarousel";
import CategorizedMovies from "./CategorizedMovies";
import SubscribeBanner from "./SubscribeBanner";
import "../componentStyle/home.css";
import SmoothScrollingToTop from "./moviesTableUtil/SmoothScrollingToTop";

function Home({ moviesData, genresData }) {
  SmoothScrollingToTop();
  return (
    <div className="home-main">
      <Banner />
      <div className="home-container">
        <Title text={"So what you watching today !"} />
        <CategorizedMovies moviesData={moviesData} genresData={genresData} />
        <MovieCarousel />
        <SubscribeBanner />
      </div>
    </div>
  );
}

export default Home;
