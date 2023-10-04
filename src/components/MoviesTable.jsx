import React from "react";
import TableHeader from "./moviesTableUtil/TableHeader";
import MTableBody from "./moviesTableUtil/MTableBody";
import { Table, Paper } from "@mui/material";
import "../componentStyle/moviesTable.css";
import SmoothScrollingToTop from "./moviesTableUtil/SmoothScrollingToTop";

const MoviesTable = ({ moviesData }) => {
  SmoothScrollingToTop();
  return (
    <div className="movies-table-container">
      <Paper>
        <Table>
          <TableHeader />
          <MTableBody moviesData={moviesData} />
        </Table>
      </Paper>
    </div>
  );
};

export default MoviesTable;
