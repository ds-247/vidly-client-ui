import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: "50%" }}>#</TableCell>
        <TableCell sx={{ width: "25%" }}>Title</TableCell>
        <TableCell sx={{ width: "25%" }}>Rate</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
