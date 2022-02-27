import React, { useContext, useState } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import formatAmount from "../../utility/formatAmount";
import { ClearRounded, MoneyOffRounded } from "@material-ui/icons";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
import Notification from "../Notification/Notification.jsx";
import { BudgetTrackerContext } from "../../context/context";

import useStyles from "./RecentStyle.js";

const List = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { transactions, deleteTransaction } = useContext(BudgetTrackerContext);

  return (
    <MUIList dense={false} className={classes.list}>
      <Notification open={open} setOpen={setOpen} type="delete" />
    
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : transaction.type === "Expense"
                    ? classes.avatarExpense
                    : classes.avatarSaving
                }
              >
                {transaction.type === "Expense" ? (
                  <MoneyOffRounded />
                ) : transaction.type === "Income" ? (
                  <AttachMoneyRoundedIcon />
                ) : (
                  <AccountBalanceRoundedIcon />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`${formatAmount(transaction.amount)} - ${
                transaction.date
              }`}
            />
            <ListItemSecondaryAction onClick={() => setOpen(true)}>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <ClearRounded />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
