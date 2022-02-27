const incomeColors = [
  "rgba(0, 117, 94, 0.5)",
  "rgba(18, 49, 35, 0.5)",
  "rgba(21, 71, 49, 0.5)",
  "rgba(22, 95, 64, 0.5)",
  "rgba(22, 120, 79, 0.5)",
  "rgba(20, 145, 95, 0.5)",
  "rgba(16, 172, 110, 0.5)",
  "rgba(11, 199, 126, 0.5)",
  "rgba(4, 227, 141, 0.5)",
  "rgba(119, 221, 119, 0.5)",
  "rgba(0, 255, 157, 0.5)",
];
const expenseColors = [
  "rgba(203, 65, 11, 0.5)",
  "rgba(181, 13, 18, 0.5)",
  "rgba(191, 47, 31, 0.5)",
  "rgba(201, 69, 44, 0.5)",
  "rgba(204, 71, 75, 0.5)",
  "rgba(245, 91, 95, 0.5)",
  "rgba(211, 88, 58, 0.5)",
  "rgba(226, 114, 91, 0.5)",
  "rgba(220, 106, 72, 0.5)",
  "rgba(229, 124, 88, 0.5)",
  "rgba(238, 141, 104, 0.5)",
  "rgba(247, 157, 121, 0.5)",
  "rgba(255, 174, 138, 0.5)",
  "rgba(247, 157, 129, 0.5)",
];
const savingColors = [
  "rgba(15, 77, 146, 0.5)",
  "rgba(0, 71, 171, 0.5)",
  "rgba(21, 96, 189, 0.5)",
  "rgba(0, 127, 255, 0.5)",
  "rgba(49, 140, 231, 0.5)",
  "rgba(91, 146, 229, 0.5)",
  "rgba(155, 221, 255, 0.5)",
  "rgba(161, 202, 241, 0.5)",
  "rgba(137, 207, 240, 0.5)",
];

export const incomeCategories = [
  { type: "Bonus", amount: 0, color: incomeColors[0] },
  { type: "Business", amount: 0, color: incomeColors[1] },
  { type: "Cryptocurrency", amount: 0, color: incomeColors[2] },
  { type: "Freelance", amount: 0, color: incomeColors[3] },
  { type: "Gift", amount: 0, color: incomeColors[4] },
  { type: "Lottery", amount: 0, color: incomeColors[5] },
  { type: "Rental Property", amount: 0, color: incomeColors[6] },
  { type: "Salary", amount: 0, color: incomeColors[7] },
  { type: "Stocks", amount: 0, color: incomeColors[8] },
  { type: "Trading", amount: 0, color: incomeColors[9] },
  { type: "Other", amount: 0, color: incomeColors[10] },
];
export const expenseCategories = [
  { type: "Bills", amount: 0, color: expenseColors[0] },
  { type: "Car", amount: 0, color: expenseColors[1] },
  { type: "Clothes", amount: 0, color: expenseColors[2] },
  { type: "Entertainment", amount: 0, color: expenseColors[3] },
  { type: "Food", amount: 0, color: expenseColors[4] },
  { type: "Groceries", amount: 0, color: expenseColors[5] },
  { type: "House", amount: 0, color: expenseColors[6] },
  { type: "Phone", amount: 0, color: expenseColors[7] },
  { type: "Personal", amount: 0, color: expenseColors[8] },
  { type: "School", amount: 0, color: expenseColors[9] },
  { type: "Shopping", amount: 0, color: expenseColors[10] },
  { type: "Transportation", amount: 0, color: expenseColors[11] },
  { type: "Vacation", amount: 0, color: expenseColors[12] },
  { type: "Other", amount: 0, color: expenseColors[12] },
];
export const savingCategories = [
  { type: "For car", amount: 0, color: savingColors[0] },
  { type: "For house", amount: 0, color: savingColors[1] },
  { type: "For kids", amount: 0, color: savingColors[2] },
  { type: "For vacation", amount: 0, color: savingColors[3] },
  { type: "Gift", amount: 0, color: savingColors[4] },
  { type: "Investment", amount: 0, color: savingColors[5] },
  { type: "Personal", amount: 0, color: savingColors[6] },
  { type: "Other", amount: 0, color: savingColors[7] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
  savingCategories.forEach((c) => (c.amount = 0));
};
