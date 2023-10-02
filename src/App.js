import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MoviesTable from "./components/MoviesTable";
import MoviePage from "./components/MoviePage";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { getMovies } from "./services/movieService";
import { getGenres } from './services/genreService';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const homePaths = ["/", "/home"];

function App() {
  const [movieData, setMovieData] = useState([]);
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    const dataRetrieval = async () => {
      const { data: moviesData } = await getMovies();
      // console.log(moviesData);

      const { data: genresData } = await getGenres();
      // console.log(genresData);

      setMovieData(moviesData);
      setGenreData(genresData);
    };

    dataRetrieval();

  });


  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={homePaths}>
            <Home moviesData={movieData} genresData={genreData} />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route exact path="/movies">
            <MoviesTable moviesData={movieData} />
          </Route>
          <Route exact path="/movie/:id">
            <MoviePage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
