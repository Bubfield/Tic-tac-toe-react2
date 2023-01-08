import React from "react";
import WhatIsName from "./WhatIsName";
import Gameboard from "./Gameboard";
import WinOrDraw from "./WinOrDraw";

const ConditionallyRenderGameboardComponent = ({ props }) => {
  const {
    hasGameStarted,
    myName,
    setMyName,
    startGame,
    handleClickOnSquare,
    draw,
    winner,
  } = props;
  return !hasGameStarted ? (
    <WhatIsName props={{ myName, setMyName, startGame }} />
  ) : (
    <>
      <Gameboard handleClickOnSquare={handleClickOnSquare} />
      <WinOrDraw props={{ draw, winner }} />
    </>
  );
};

export default ConditionallyRenderGameboardComponent;
