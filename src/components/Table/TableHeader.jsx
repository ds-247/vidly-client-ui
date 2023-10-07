import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader = ({ tableHead: data }) => {
  return (
    <TableHead>
      <TableRow>
        {data.map((d, index) => (
          <TableCell key={index}>{d.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
