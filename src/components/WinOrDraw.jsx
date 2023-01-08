import React from "react";

const WinOrDraw = ({ props }) => {
  const { draw, winner } = props;
  return (
    <div className="win">
      {!draw ? <h1>{winner} wins!!!</h1> : <h1>Draw!</h1>}
    </div>
  );
};

export default WinOrDraw;
