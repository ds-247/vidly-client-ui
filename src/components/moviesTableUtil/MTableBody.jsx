import React from "react";
import { TableRow, TableCell, TableBody } from "@mui/material";

const MTableBody = ({ moviesData: movies }) => {
  return (
    <TableBody>
      {movies.map((movie) => {
        return (
          <TableRow>
            <TableCell>
              <div>
                <img src={movie.movieImage} alt="Movie Poster"></img>
              </div>
            </TableCell>
            <TableCell sx={{width:"315px"}}>{movie.title}</TableCell>
            <TableCell>{movie.dailyRentalRate}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default MTableBody;
