import React from "react";
import {
  DashboardRounded,
  HistoryRounded,
  PieChartRounded,
  InfoRounded,
} from "@material-ui/icons";

export const Sidebar = [
  {
    title: "Dashboard",
    path: "/budget-tracker-v1/",
    icon: <DashboardRounded />,
    cName: "nav-item",
  },
  {
    title: "History",
    path: "/budget-tracker-v1/history",
    icon: <HistoryRounded />,
    cName: "nav-item",
  },
  {
    title: "Charts",
    path: "/budget-tracker-v1/charts",
    icon: <PieChartRounded />,
    cName: "nav-item",
  },
  {
    title: "About",
    path: "/budget-tracker-v1/about",
    icon: <InfoRounded />,
    cName: "nav-item",
  },
];

