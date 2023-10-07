import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "../componentStyle/moviePopup.css";

export default function MoviePopUp({ onRental }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{ width: "200px", mb: 2 }}
      >
        <CurrencyRupeeIcon sx={{ mr: 1 }} />
        Rent
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="MoviePopUp-container"
      >
        <DialogTitle id="customized-dialog-title" className="MoviePopUp-title">
          Rental Confirmation
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers className="MoviePopUp-content">
          <Typography gutterBottom>Movie Name : Batman</Typography>
          <Typography gutterBottom>Daily Rental Rate : 32</Typography>
        </DialogContent>
        <DialogActions className="MoviePopUp-actions">
          <Button
            autoFocus
            onClick={async () => {
              await onRental();
              handleClose();
            }}
          >
            Rent
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
