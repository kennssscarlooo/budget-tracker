import React from "react";
import { Button } from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import useStyle from "./pages.js";
import { useHistory } from "react-router-dom";
function About() {
  const classes = useStyle();
  const historyList = useHistory();
  return (
    <div className={classes.aboutSection}>
      <div className="middle">
        <h1>About</h1>
        <div className="about-content">
          <p>
            This is a budget tracker app wherein you can add three different
            types of transaction and each type has different categories. This
            app will give you an overview and charts of your income, expenses,
            as well as your savings. This app will help you to track your money
            by showing your transaction history.{" "}
          </p>
          <p>
            This app was built using HTML, CSS, JavaScript and React.js for the
            front-end. LocalStorage was also utilized in this app so that the
            app can store and remember all of you transactions.
          </p>
        </div>
      </div>
      <div className={classes.center}>
        <Button
          className={classes.aboutButton}
          variant="contained"
          onClick={() => historyList.goBack()}
        >
          <ArrowBackIosRoundedIcon
            style={{ paddingRight: "4px" }}
            fontSize="small"
          />
          Back
        </Button>
      </div>
    </div>
  );
}

export default About;
