import React, { useContext } from "react";
import { AppContext } from "../state/AppState";

const RestartButton = ({ props }) => {
  const { setPlayerLetter, setHasGameStarted } = props;
  const [
    ,
    setPlayerName,
    ,
    setSquaresOccupied,
    ,
    setWin,
    ,
    setAI,
    ,
    setWinner,
    ,
    setAIMoveInProgress,
    ,
    setDraw,
    ,
    setAIFirstMove,
  ] = useContext(AppContext);

  //reset all state variables
  const handleRestart = () => {
    setPlayerLetter("");
    setHasGameStarted(false);
    setPlayerName("");
    setSquaresOccupied(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    setWin(false);
    setAI("");
    setAIMoveInProgress(false);
    setDraw(false);
    setWinner("");
    setAIFirstMove(false);
  };

  return (
    <div>
      <button id="restart" type="button" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
};

export default RestartButton;
