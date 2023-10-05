import React, { useEffect, useState } from "react";
import auth from "../services/authService";
import CircularProgress from "@mui/material/CircularProgress";

function Logout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const performAction = async function () {
      await auth.logout();
      setLoading(false);
      window.location = "/";
    };

    performAction();
  }, []);

  return (
    <div className="form-background-image">
      <div className="form-container">
        {loading ? <CircularProgress /> : null}
      </div>
    </div>
  );
}

export default Logout;
