import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import { Button } from "@mui/material";

function SubscribeBanner() {
  return (
    <div className="sub-banner">
      <p>Top movies. Top Series. Only on VIDLY.</p>
      <Button variant="contained">
        <PaymentIcon sx={{ mr: 1 }} />
        Join for Free
      </Button>
    </div>
  );
}

export default SubscribeBanner;
