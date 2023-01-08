import React from "react";

const Gameboard = ({ handleClickOnSquare }) => {
  const gameboardSquares = Array(9).fill(0);

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
