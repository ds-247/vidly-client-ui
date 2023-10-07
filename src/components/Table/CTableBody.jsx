import React from "react";
import { TableRow, TableCell, TableBody } from "@mui/material";

const CTableBody = ({ header, data }) => {
  return (
    <TableBody>
      {data.map((d, index) => (
        <TableRow key={index}>
          {header.map((h, ind) => (
            <TableCell key={ind}>
              {h.component ? h.component(d) : d[h.pathName]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default CTableBody;
