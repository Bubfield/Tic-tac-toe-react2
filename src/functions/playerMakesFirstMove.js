export const playerMakesFirstMove = (player, squaresOccupied) => {
  if (player === "X" && !!squaresOccupied[8]) {
    return true;
  }
};
