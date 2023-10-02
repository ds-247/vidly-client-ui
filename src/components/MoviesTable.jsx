import React from "react";
import TableHeader from "./moviesTableUtil/TableHeader";
import MTableBody from "./moviesTableUtil/MTableBody";
import { Table, Paper } from "@mui/material";
import "../componentStyle/moviesTable.css";

const MoviesTable = ({moviesData}) => {
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
