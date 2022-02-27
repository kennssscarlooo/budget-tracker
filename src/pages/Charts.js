import React from "react";
import ChartView from "../components/Chart/Chart.jsx";
import { Grid, Button } from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { Carousel } from "react-bootstrap";
import useStyle from "./pages.js";
import { useHistory } from "react-router-dom";
function Charts() {
  const classes = useStyle();
  const historyList = useHistory();
  return (
    <div className="section">
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        style={{ height: "60vh" }}
        width="80%"
      >
        <Grid item xs={10} sm={4}>
          <Carousel variant="dark">
            <Carousel.Item>
              <ChartView title="Income" />
            </Carousel.Item>
            <Carousel.Item>
              <ChartView title="Saving" />
            </Carousel.Item>
            <Carousel.Item>
              <ChartView title="Expense" />
            </Carousel.Item>
          </Carousel>
          <div className={classes.center}>
            <Button
              className={classes.button}
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Charts;
