import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "./NotificationStyle";

const Notification = ({ open, setOpen, type }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "click") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity={type === "add" ? "success" : "error"}
          elevation={6}
          variant="filled"
        >
          {type === "add"
            ? "Transaction successfully added."
            : "Transaction successfully deleted."}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Notification;
