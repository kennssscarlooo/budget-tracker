import { useContext } from "react";
import { BudgetTrackerContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  savingCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions, balance } = useContext(BudgetTrackerContext);
  const allTransactions = transactions.filter(
    (transaction) => transaction.type === title
  );
  const total = allTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories =
    title === "Income"
      ? incomeCategories
      : title === "Expense"
      ? expenseCategories
      : savingCategories;
  allTransactions.forEach((transaction) => {
    const category = categories.find(
      (category) => category.type === transaction.category
    );
    if (category) category.amount += transaction.amount;
  });
  const allSaving = transactions.filter(
    (transaction) => transaction.type === "Saving"
  );
  const totalSaving = allSaving.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const allExpense = transactions.filter(
    (transaction) => transaction.type === "Expense"
  );
  const totalExpense = allExpense.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );

  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartOverviewData = {
    datasets: [
      {
        data: [balance, totalExpense, totalSaving],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
        ],
      },
    ],
    labels: ["Balance", "Expense", "Saving"],
  };
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return {
    filteredCategories,
    total,
    chartData,
    chartOverviewData,
    totalExpense,
    totalSaving,
  };
};

export default useTransactions;
