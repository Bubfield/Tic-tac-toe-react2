import { checkIfDraw } from "./checkIfDraw";
import { checkIfWin } from "./checkifWin";
import { grabAllSquareByIDs } from "./grabAllSquareByIDs";

export const checkIfWinOrDraw = (
  squaresOccupied,
  whoIsWinner,
  setDraw,
  setWin
) => {
  const { one, two, three, four, five, six, seven, eight, nine } =
    grabAllSquareByIDs();

  if (
    checkIfDraw(
      squaresOccupied,
      whoIsWinner,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine
    )
  ) {
    setDraw(true);
  } else if (
    checkIfWin(
      whoIsWinner,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine
    )
  ) {
    setWin(true);
  }
};
