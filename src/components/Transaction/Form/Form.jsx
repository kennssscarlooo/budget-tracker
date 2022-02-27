import React, { useState, useContext } from "react";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { BudgetTrackerContext } from "../../../context/context.js";
import {
  incomeCategories,
  expenseCategories,
  savingCategories,
} from "../../../constants/categories";

import useStyles from "./FormStyle.js";
import formatDate from "../../../utility/formatDate";
import Notification from "../../Notification/Notification.jsx";
const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(BudgetTrackerContext);
  const [open, setOpen] = useState(false);
  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) && !formData.category) return;

    if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
      setFormData({ ...formData, type: "Income" });
    } else if (
      savingCategories.map((iC) => iC.type).includes(formData.category)
    ) {
      setFormData({ ...formData, type: "Saving" });
    } else if (
      expenseCategories.map((iC) => iC.type).includes(formData.category)
    ) {
      setFormData({ ...formData, type: "Expense" });
    }

    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    });
    setFormData(initialState);
    setOpen(true);
  };
  const selectedCategories =
    formData.type === "Income"
      ? incomeCategories
      : formData.type === "Expense"
      ? expenseCategories
      : savingCategories;
  return (
    <Grid container spacing={2}>
      <Notification open={open} setOpen={setOpen} type="add" />
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Saving">Saving</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Date"
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
          fullWidth
        />
      </Grid>
      <div className={classes.center}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={createTransaction}
        >
          Add
        </Button>
      </div>
    </Grid>
  );
};

export default Form;
