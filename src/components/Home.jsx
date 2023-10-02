import React from "react";
import Banner from "./Banner";
import Title from "./Title";
import MovieCarousel from "./MovieCarousel";
import CategorizedMovies from "./CategorizedMovies";
import SubscribeBanner from "./SubscribeBanner";
import "../componentStyle/home.css";

function Home({ moviesData , genresData }) {
  return (
    <div className="home-main">
      <Banner />
      <div className="home-container">
        <Title text={"So what you watching today !"} />
        <CategorizedMovies
          moviesData={moviesData}
          genresData={genresData}
          category={"Thriller"}
        />
        <MovieCarousel />
        <SubscribeBanner />
      </div>
    </div>
  );
}

export default Home;
