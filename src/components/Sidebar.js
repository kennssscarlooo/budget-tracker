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
    path: "/",
    icon: <DashboardRounded />,
    cName: "nav-item",
  },
  {
    title: "History",
    path: "/history",
    icon: <HistoryRounded />,
    cName: "nav-item",
  },
  {
    title: "Charts",
    path: "/charts",
    icon: <PieChartRounded />,
    cName: "nav-item",
  },
  {
    title: "About",
    path: "/about",
    icon: <InfoRounded />,
    cName: "nav-item",
  },
];
