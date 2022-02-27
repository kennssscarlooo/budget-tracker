import React, { useState } from "react";
import { MenuRounded, CloseRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import "./styles.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars" id="menu">
          <MenuRounded
            fontSize="large"
            style={{ color: "white" }}
            onClick={handleClick}
          />
        </Link>
        <div className="brand-name">
          <p>Budget Tracker</p>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={handleClick}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <CloseRounded fontSize="large" style={{ color: "white" }} />
            </Link>
          </li>
          {Sidebar.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="nav-span">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
