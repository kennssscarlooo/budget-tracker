import React from "react";
import { Card, CardHeader, CardContent, Button } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useHistory } from "react-router-dom";
import useTransactions from "../../useTransactions";
import useStyles from "./ChartOverviewStyle.js";
import {
  Chart,
  ArcElement,
  DoughnutController,
  Legend,
  Tooltip,
} from "chart.js";
Chart.register(ArcElement, DoughnutController, Legend, Tooltip);

const ChartOverview = ({ title }) => {
  const classes = useStyles();
  const { chartOverviewData } = useTransactions(title);
  const history = useHistory();
  return (
    <Card className={classes.overview}>
      <CardHeader title={title} />
      <CardContent>
        <div
          style={{
            height: "100%",
            width: "100%",
            margin: "auto",
          }}
        >
          <Doughnut
            data={chartOverviewData}
            options={{
              plugins: {
                legend: {
                  labels: {
                    font: {
                      size: 12,
                    },
                    position: "chartArea",
                  },
                },
              },
            }}
          />
        </div>
      </CardContent>
      <div className={classes.center}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => history.push("/charts")}
        >
          View all
        </Button>
      </div>
    </Card>
  );
};

export default ChartOverview;
