import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dashboard: {
    [theme.breakpoints.up("sm")]: {
      width: "90vw",
      margin: "auto",
      textAlign: "center",
    },
  },
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  last: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      paddingBottom: "200px",
    },
  },
  section: {
    margin: "10px auto",
    width: "90vw",
    maxWidth: "800px",
  },
  recent: {
    borderRadius: "10px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  },
  center: {
    margin: "auto",
    textAlign: "center",
  },
  button: {
    margin: "10px",
    backgroundColor: "black",
    fontSize: "12px",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  aboutButton: {
    marginTop: "80vh",
    backgroundColor: "black",
    fontSize: "12px",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
}));
