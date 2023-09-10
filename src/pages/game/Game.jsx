// import "./game.css";

// function Game() {
//   return (
//     <div className="game">
//       <div className="gameContainer">game</div>
//     </div>
//   );
// }

// export default Game;

import "./game.css";
import React, { useState, useEffect } from "react";
import { AllCountry } from "../../services/CountryApi"; // Import your API service

function CountryGuessingGame(darkMode) {
  const [countries, setCountries] = useState([]);
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [feedText, setFeedText] = useState("");

  useEffect(() => {
    // Fetch countries from the API
    AllCountry().then((result) => {
      setCountries(result.data);
    });
  }, []);

  const handleGuess = () => {
    const currentCountry = countries[currentCountryIndex];
    const guessedCountry = userInput.trim().toLowerCase();

    if (guessedCountry === currentCountry.name.common.toLowerCase()) {
      setScore(score + 1);
      setFeedText("correct! next..");
    } else {
      setFeedText("wrong! next..");
    }

    if (currentCountryIndex === countries.length - 1) {
      setGameOver(true);
    } else {
      setCurrentCountryIndex(currentCountryIndex + 1);
      setUserInput("");
    }
  };

  return (
    <div className="game">
      <div className="gameContainer">
        <h2 className="title2">
          How many countries names can you guess correctly?
        </h2>
        <div className="topBar">
          <h2 className="score">score : {score}</h2>
          <h2 className="feedText">{feedText}</h2>
        </div>
        {gameOver ? (
          <p>Game Over! Your score: {score}</p>
        ) : (
          <div className="gamePannel">
            <img
              src={countries[currentCountryIndex]?.flags.png}
              alt="Country Flag"
            />
            <input
              className={`inputGuess ${darkMode ? "dark" : ""}`}
              type="text"
              placeholder="Guess The Name..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={handleGuess}>Guess</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryGuessingGame;
