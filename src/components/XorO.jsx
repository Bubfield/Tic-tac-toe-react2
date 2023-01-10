import React, { useContext } from "react";
import { AppContext } from "../appStateAndFunctions";

const XorO = () => {
  const { handleMyLetter } = useContext(AppContext);
  return (
    <div className="player-choice">
      <span id="x" onClick={(e) => handleMyLetter(e)}>
        X
      </span>{" "}
      or{" "}
      <span id="o" onClick={(e) => handleMyLetter(e)}>
        O
      </span>
      ?
    </div>
  );
};

export default XorO;
