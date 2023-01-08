import React from "react";

const RestartButton = ({ handleRestart }) => {
  return (
    <div className="restart-div">
      <button id="restart" type="button" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
};

export default RestartButton;
