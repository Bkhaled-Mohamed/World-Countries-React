import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <div className={`navBar ${darkMode ? "dark" : ""}`}>
      <div className="navbarContainer">
        <Link to="/" className={`title ${darkMode ? "dark" : ""}`}>
          Worlds Countries
        </Link>
        <Link to="/game" className={`gameBtn ${darkMode ? "dark" : ""}`}>
          Test Your Knowledge!
        </Link>
        <div className="darkModeToggle" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={faMoon} /> dark mode
        </div>
      </div>
    </div>
  );
}

export default Navbar;
