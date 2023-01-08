export const AIPicksSquareToMoveOn = (squares) => {
  let randomNum = Math.floor(Math.random() * squares.length);
  let randomSquare = squares[randomNum];
  return randomSquare;
};
