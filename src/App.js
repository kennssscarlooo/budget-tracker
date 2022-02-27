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
        <Route path="/" exact component={Dashboard} />
        <Route path="/charts" component={Charts} />
        <Route path="/history" component={History} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
