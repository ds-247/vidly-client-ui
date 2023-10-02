import React from "react";
import { TableRow, TableCell, TableBody } from "@mui/material";
import { Link } from "react-router-dom";

const MTableBody = ({ moviesData: movies }) => {
  return (
    <TableBody>
      {movies.map((movie) => {
        return (
          <TableRow key={movie._id} className="movie-table-row">
            <TableCell>
              {" "}
              <div className="movie-table-img-wrapper">
                <Link
                  to={{
                    pathname: `movie/${movie._id}`,
                    state: { movieData: movie },
                  }}
                >
                  <img src={movie.movieImage} alt="Movie Poster"></img>
                </Link>
              </div>
            </TableCell>
            <TableCell>
              <Link
                to={{
                  pathname: `movie/${movie._id}`,
                  state: { movieData: movie },
                }}
              >
                {movie.title}
              </Link>
            </TableCell>
            <TableCell>{movie.dailyRentalRate}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default MTableBody;
