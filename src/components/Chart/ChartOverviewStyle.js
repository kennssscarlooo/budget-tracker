import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  overview: {
    borderRadius: "10px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  },
  chartContainer: {
    height: "300px",
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
}));
