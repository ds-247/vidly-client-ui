import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader = ({ tableHead: data }) => {
  return (
    <TableHead>
      <TableRow>
        {data.map((d) => (
          <TableCell key={d.label}>{d.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
