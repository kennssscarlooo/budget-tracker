import React, { useState, useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import Collapse from "@material-ui/core/Collapse";
import formatAmount from "../../utility/formatAmount";
import { BudgetTrackerContext } from "../../context/context";
import useTransactions from "../../useTransactions";
import Form from "./Form/Form.jsx";

import useStyles from "./TransactionStyle.js";

const Transaction = (props) => {
  const { balance } = useContext(BudgetTrackerContext);
  const { totalExpense, totalSaving } = useTransactions(props.title);
  const [isExpand, setExpand] = useState(false);
  const classes = useStyles();
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <Card className={classes.overview}>
      <CardContent className={classes.overviewContent}>
        <CardHeader title={props.title} />
        <Typography align="left" variant="h5">
          Your Balance: {formatAmount(balance)}
        </Typography>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography align="center" variant="subtitle1">
                Saving
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="center" variant="subtitle1">
                Expense
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography align="center" variant="subtitle1">
                {formatAmount(totalSaving)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="center" variant="subtitle1">
                {formatAmount(totalExpense)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <div style={{ alignItems: "center", justifyContent: "center" }}>
          <Button onClick={handleExpand}>
            <ExpandMoreRoundedIcon
              fontSize="large"
              className={isExpand ? classes.open : classes.close}
            />
          </Button>
        </div>
      </CardContent>
      <Collapse in={isExpand}>
        <CardContent className={classes.formContent}>
          <Form />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Transaction;
