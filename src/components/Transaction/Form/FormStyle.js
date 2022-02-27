import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  center: {
    margin: "auto",
    textAlign: "center",
  },
  input: {
    margin: "11px 0 auto",
    width: "100%",
    height: "37px",
    border: "none",
    textIndent: "5px",
  },
}));
