import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Charts from "./pages/Charts";
import History from "./pages/History";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/budget-tracker/" exact component={Dashboard} />
        <Route path="/budget-tracker/charts" component={Charts} />
        <Route path="/budget-tracker/history" component={History} />
        <Route path="/budget-tracker/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
