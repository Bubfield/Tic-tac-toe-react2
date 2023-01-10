import React, { useContext } from "react";
import { AppContext } from "../appStateAndFunctions";

const Gameboard = () => {
  const gameboardSquares = Array(9).fill(0);
  const { handleClickOnSquare } = useContext(AppContext);

  return (
    <div className="gameboard">
      {gameboardSquares.map((i, index) => (
        <div
          className="gameboard-square"
          onClick={(e) => handleClickOnSquare(e)}
          key={index}
          id={index + 1}
        ></div>
      ))}
    </div>
  );
};

export default Gameboard;
