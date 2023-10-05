import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PaymentIcon from "@mui/icons-material/Payment";
import "../componentStyle/form.css";

function SubscribeBanner() {
  return (
    <div className="sub-banner">
      <p>Top movies. Top Series. Only on VIDLY.</p>
      <Button component={Link} to="/register" variant="contained">
        <PaymentIcon sx={{ mr: 1 }} />
        Subscribe
      </Button>
    </div>
  );
}

export default SubscribeBanner;
