import React, { useContext } from "react";
import WhatIsName from "./WhatIsName";
import Gameboard from "./Gameboard";
import WinOrDraw from "./WinOrDraw";
import { AppContext } from "../appStateAndFunctions";

const ConditionallyRenderGameboardComponent = () => {
  const { hasGameStarted } = useContext(AppContext);
  return !hasGameStarted ? (
    <WhatIsName />
  ) : (
    <>
      <Gameboard />
      <WinOrDraw />
    </>
  );
};

export default ConditionallyRenderGameboardComponent;
