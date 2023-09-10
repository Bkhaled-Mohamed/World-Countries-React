import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./app.css";

import Home from "./pages/home/Home";
import Country from "./pages/country/Country";
import Game from "./pages/game/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route
            path="/country/:countryCode"
            element={<Country darkMode={darkMode} />}
          />
          <Route path="/game" element={<Game darkMode={darkMode} />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
