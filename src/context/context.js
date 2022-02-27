import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer.js";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 30000,
    category: "Salary",
    type: "Income",
    date: "2021-12-06",
    id: "44c68123-5b86-4cc8-b915-bb9e16cebe6a",
  },
  {
    amount: 2500,
    category: "Bills",
    type: "Expense",
    date: "2021-12-13",
    id: "33b295b8-a8cb-49f0-8f0d-bb268686de1a",
  },
  {
    amount: 1500,
    category: "Gift",
    type: "Saving",
    date: "2021-12-24",
    id: "270304a8-b11d-4e16-9341-33df641ede64",
  },
];

export const BudgetTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Income" ? acc + currVal.amount : acc - currVal.amount,
    0
  );
  const saving = transactions.reduce(
    (acc, currVal) => currVal.type === "Saving" && acc + currVal.amount,
    0
  );
  const expense = transactions.reduce(
    (acc, currVal) => currVal.type === "Expense" && acc + currVal.amount,
    0
  );

  return (
    <BudgetTrackerContext.Provider
      value={{
        transactions,
        balance,
        saving,
        expense,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </BudgetTrackerContext.Provider>
  );
};
