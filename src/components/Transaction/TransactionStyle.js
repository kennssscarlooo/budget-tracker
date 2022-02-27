import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  overview: {
    backgroundColor: "#EBEBEB",
    borderRadius: "10px",
  },
  overviewContent: {
    borderRadius: "10px",
    backgroundColor: "black",
    color: "white",
  },
  formContent: {
    borderRadius: "10px",
    backgroundColor: "white",
    color: "black",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  },
  close: {
    backgroundColor: "white",
    border: "1px solid white",
    borderRadius: "50%",
    color: "black",
    transform: "rotate(0deg)",
    transition: "0.2s ease-in",
  },
  open: {
    backgroundColor: "white",
    border: "1px solid white",
    borderRadius: "50%",
    color: "black",
    transform: "rotate(-180deg)",
    transition: "0.2s ease-in-out",
  },
}));
