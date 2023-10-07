import React from "react";
import { Table, TableContainer, Paper } from "@mui/material";
import TableHeader from "./TableHeader";
import CTableBody from "./CTableBody";

function CTable({ header, data }) {
  return (
    <div className="order-table-container">
      <TableContainer component={Paper} sx={{ width: "95%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader tableHead={header} />
          <CTableBody header={header} data={data} />
        </Table>
      </TableContainer>
    </div>
  );
}

export default CTable;
