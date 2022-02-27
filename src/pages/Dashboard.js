import React from "react";
import { Card, CardHeader, CardContent, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Transaction from "../components/Transaction/Transaction.jsx";
import ChartOverview from "../components/Chart/ChartOverview.jsx";
import Recent from "../components/Recent/Recent.jsx";

import useStyle from "./pages.js";

const Dashboard = (props) => {
  const classes = useStyle();
  const history = useHistory();
  return (
    <div className={classes.section}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        className={classes.container}
        style={{ height: "90vh", backgroundColor: "#EBEBEB" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <ChartOverview title="Overview" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.dashboard}>
          <Transaction />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <ChartOverview title="Overview" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Card className={classes.recent}>
            <CardContent>
              <CardHeader title="Recent transactions" />
              <div
                style={{
                  height: "370px",
                  overflow: "hidden",
                }}
              >
                <Recent />
              </div>
            </CardContent>
            <div className={classes.center}>
              <Button
                className={classes.button}
                variant="contained"
                onClick={() => history.push("/history")}
              >
                View all
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
