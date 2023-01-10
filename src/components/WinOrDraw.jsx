import React, { useContext } from "react";
import { AppContext } from "../appStateAndFunctions";

const WinOrDraw = () => {
  const { draw, winner } = useContext(AppContext);
  return (
    <div className="win">
      {!draw ? <h1>{winner} wins!!!</h1> : <h1>Draw!</h1>}
    </div>
  );
};

export default WinOrDraw;
