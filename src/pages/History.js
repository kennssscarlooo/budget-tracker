import React from "react";
import { Card, CardHeader, CardContent, Grid, Button } from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { useHistory } from "react-router-dom";
import Recent from "../components/Recent/Recent.jsx";
import useStyle from "./pages.js";

const History = (props) => {
  const classes = useStyle();
  const historyList = useHistory();
  return (
    <div className={classes.section}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.container}
        style={{ height: "90vh", backgroundColor: "#EBEBEB" }}
      >
        <Grid item xs={12} sm={6}>
          <Card className={classes.recent}>
            <CardContent>
              <CardHeader title="History" />
              <div style={{ height: "480px", overflow: "auto" }}>
                <Recent />
              </div>
            </CardContent>
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
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default History;
