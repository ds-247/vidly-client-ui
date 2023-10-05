import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "../componentStyle/ordersTable.css";
import SmoothScrollingToTop from "./moviesTableUtil/SmoothScrollingToTop";

function createData(name, begin, end, days, rate, amt) {
  return { name, begin, end, days, rate, amt };
}

const rows = [
  createData("Batman Begins", 159, 6.0, 24, 4.0, 32),
  createData("John Wick", 237, 9.0, 37, 4.3, 23),
  createData("Expendables", 262, 16.0, 24, 6.0, 23),
  createData("Dunkrik", 305, 3.7, 67, 4.3, 23),
  createData("1917", 356, 16.0, 49, 3.9, 23),
];

function Orders() {
  SmoothScrollingToTop();

  return (
    <>
      {
        <div className="order-table-container">
          <TableContainer component={Paper} sx={{ width: "95%" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ height: "80px" }}>
                  <TableCell># Movie Title</TableCell>
                  <TableCell align="center">Rented On</TableCell>
                  <TableCell align="center">Returned On&nbsp;(g)</TableCell>
                  <TableCell align="center">Number of Days&nbsp;(g)</TableCell>
                  <TableCell align="center">Rate&nbsp;(g)</TableCell>
                  <TableCell align="center">Amount&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    style={{ height: "150px" }}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.begin}</TableCell>
                    <TableCell align="center">{row.end}</TableCell>
                    <TableCell align="center">{row.days}</TableCell>
                    <TableCell align="center">{row.rate}</TableCell>
                    <TableCell align="center">{row.amt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      }
    </>
  );
}

export default Orders;
