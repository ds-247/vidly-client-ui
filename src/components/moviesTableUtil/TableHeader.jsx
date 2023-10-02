import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader = () => {
  return (
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Rate</TableCell>
        </TableRow>
      </TableHead>
  );
};

export default TableHeader;
