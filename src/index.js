import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import React, { useState, useEffect } from 'react';
ReactDOM.render(<App />, document.getElementById("root"));



function GolfGame() {
  const [ballPosition, setBallPosition] = useState({ left: 0 });
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setBallPosition((prevPosition) => ({
          left: prevPosition.left + 5,
        }));
      }
    };

    if (gameStarted) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted]);

  const handleStartClick = () => {
    setGameStarted(true);
  };

  return (
    <div>
      {gameStarted ? (
        <div
          className="ball"
          style={{
            position: 'absolute',
            left: `${ballPosition.left}px`,
          }}
        />
      ) : (
        <button className="start" onClick={handleStartClick}>
          Start
        </button>
      )}
    </div>
  );
}

export default GolfGame;
