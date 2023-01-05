import React, { useContext } from "react";
import { AppContext } from "../state/AppState";

const ChooseXorO = ({ setPlayerLetter }) => {
  const [, , , , , , , setAI, , , , , , , , ,] = useContext(AppContext);

  /*set Player to be what they choose(X or O)
  and set AI to be the opposite of that choice*/
  const handlePlayer = (e) => {
    let text = e.target.textContent;
    setPlayerLetter(text);
    if (text === "X") {
      setAI("O");
    } else if (text === "O") {
      setAI("X");
    }
  };

  return (
    <div className="player-choice">
      <span id="x" onClick={(e) => handlePlayer(e)}>
        X
      </span>{" "}
      or{" "}
      <span id="o" onClick={(e) => handlePlayer(e)}>
        O
      </span>
      ?
    </div>
  );
};

export default ChooseXorO;
