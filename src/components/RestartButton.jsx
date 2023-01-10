import React, { useContext } from "react";
import { AppContext } from "../appStateAndFunctions";

const RestartButton = () => {
  const { handleRestart } = useContext(AppContext);
  return (
    <div className="restart-div">
      <button id="restart" type="button" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
};

export default RestartButton;
