import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
import formatAmount from "../../utility/formatAmount";
import useStyles from "./ChartStyle.js";
import {
  Chart,
  ArcElement,
  DoughnutController,
  Legend,
  Tooltip,
} from "chart.js";
Chart.register(ArcElement, DoughnutController, Legend, Tooltip);

const ChartView = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card
      style={{ margin: "20px auto" }}
      className={
        title === "Income"
          ? classes.income
          : title === "Saving"
          ? classes.saving
          : classes.expense
      }
    >
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="subtitle1">{formatAmount(total)}</Typography>
        <div
          style={{
            height: "100%",
            width: "100%",
            margin: "auto",
          }}
        >
          <Doughnut
            data={chartData}
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
    </Card>
  );
};

export default ChartView;
