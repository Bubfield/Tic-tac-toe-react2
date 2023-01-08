import React from "react";

const XorO = ({ handlePlayerLetter }) => {
  return (
    <div className="player-choice">
      <span id="x" onClick={(e) => handlePlayerLetter(e)}>
        X
      </span>{" "}
      or{" "}
      <span id="o" onClick={(e) => handlePlayerLetter(e)}>
        O
      </span>
      ?
    </div>
  );
};

export default XorO;
