import React, { useContext } from "react";
import { AppContext } from "../state/AppState";

const WhatIsNameInputAndStartButton = ({ props }) => {
  const [playerName, setPlayerName] = useContext(AppContext);
  const { playerLetter, setHasGameStarted } = props;

  /*if player has chosen X or O, and has filled
   in their name, then you can start the game*/
  const startGame = (e) => {
    e.preventDefault();
    if (playerLetter && playerName) {
      setHasGameStarted(true);
    }
  };

  return (
    <div className="what-is-name-div">
      <p className="what-is-name">What is your name?</p>
      <form>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="input-style"
        />
        <button onClick={(e) => startGame(e)} id="start">
          Start Game
        </button>
      </form>
    </div>
  );
};

export default WhatIsNameInputAndStartButton;
