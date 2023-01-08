/*import { useContext } from "react";
import { AppContext } from "./src/state";

const {
  myLetter,
  setMyLetter,
  myName,
  setMyName,
  hasGameStarted,
  setHasGameStarted,
  squaresOccupied,
  setSquaresOccupied,
  win,
  setWin,
  AILetter,
  setAILetter,
  winner,
  setWinner,
  draw,
  setDraw,
  myTurn,
  setMyTurn,
  AIsTurn,
  setAIsTurn,
} = useContext(AppContext);

export const AIPicksSquareToMoveOn = (squares) => {
  let randomNum = Math.floor(Math.random() * squares.length);
  let randomSquare = squares[randomNum];
  return randomSquare;
};

export const displayWinOrDraw = (win, draw) => {
  if (win || draw) {
    let gameboard = document.querySelector(".gameboard");
    let win = document.querySelector(".win");
    gameboard.style.display = "none";
    win.style.display = "flex";
  }
};

export const executeAIMove = (square, AILetter) => {
  document.getElementById(square).textContent = AILetter;
  return square;
};

export const executeMyMove = (e, myLetter) => {
  let square = e.target;
  square.textContent = myLetter;
  return square.id;
};

export const getWinboardStyle = () => {
  let win1 = document.querySelector(".win");
  let winStyle = window.getComputedStyle(win1);
  return winStyle;
};

export const handleMyLetter = (e, setMyLetter, setAILetter) => {
  let text = e.target.textContent;
  setMyLetter(text);
  if (text === "X") {
    setAILetter("O");
  } else {
    setAILetter("X");
  }
};

export const playerMakesFirstMove = (player, squaresOccupied) => {
  if (player === "X" && !!squaresOccupied[8]) {
    return true;
  }
};

export const playerTurnIsOver = (setPlayer1Turn, setPlayer2Turn) => {
  setPlayer1Turn(false);
  setPlayer2Turn(true);
};

export const squareIsNotOccupied = (e) => {
  return !e.target.textContent;
};

const grabAllSquareByIDs = () => {
  let one = document.getElementById("1").textContent;
  let two = document.getElementById("2").textContent;
  let three = document.getElementById("3").textContent;
  let four = document.getElementById("4").textContent;
  let five = document.getElementById("5").textContent;
  let six = document.getElementById("6").textContent;
  let seven = document.getElementById("7").textContent;
  let eight = document.getElementById("8").textContent;
  let nine = document.getElementById("9").textContent;
  return { one, two, three, four, five, six, seven, eight, nine };
};

const whoIsWinner = (num1, num2, num3) => {
  if (num1 && num2 && num3 && num1 === num2 && num1 === num3) {
    if (num1 === myLetter) {
      setWinner(myName);
    } else {
      setWinner("The Computer");
    }
    return true;
  } else {
    return false;
  }
};

const checkIfDraw = (
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
) => {
  return (
    !squaresOccupied[0] &&
    !whoIsWinner(one, two, three) &&
    !whoIsWinner(four, five, six) &&
    !whoIsWinner(seven, eight, nine) &&
    !whoIsWinner(one, four, seven) &&
    !whoIsWinner(two, five, eight) &&
    !whoIsWinner(three, six, nine) &&
    !whoIsWinner(one, five, nine) &&
    !whoIsWinner(three, five, seven)
  );
};

const checkIfWin = (
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
) => {
  return (
    whoIsWinner(one, two, three) ||
    whoIsWinner(four, five, six) ||
    whoIsWinner(seven, eight, nine) ||
    whoIsWinner(one, four, seven) ||
    whoIsWinner(two, five, eight) ||
    whoIsWinner(three, six, nine) ||
    whoIsWinner(one, five, nine) ||
    whoIsWinner(three, five, seven)
  );
};

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

const handleRestart = () => {
  setMyLetter("");
  setHasGameStarted(false);
  setMyName("");
  setSquaresOccupied(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  setWin(false);
  setAILetter("");
  setDraw(false);
  setWinner("");
  setAIsTurn(false);
  setMyTurn(false);
};

const startGame = (e) => {
  e.preventDefault();
  if (myLetter && myName) {
    setHasGameStarted(true);
  }
};

const handleClickOnSquare = (e) => {
  if (
    playerMakesFirstMove(myLetter, squaresOccupied) ||
    (myTurn && squareIsNotOccupied(e))
  ) {
    let playerChosenSquare = executeMyMove(e, myLetter);
    setSquaresOccupied(
      squaresOccupied.filter((elem) => elem !== playerChosenSquare)
    );
    playerTurnIsOver(setMyTurn, setAIsTurn);
  } else {
    return;
  }
};

const AIMove = () => {
  if (hasGameStarted) {
    let winStyle = getWinboardStyle();
    if (playerMakesFirstMove(AILetter, squaresOccupied) || AIsTurn) {
      let randomSquare = AIPicksSquareToMoveOn(squaresOccupied);
      setTimeout(() => {
        if (winStyle.display === "none") {
          executeAIMove(randomSquare, AILetter);
          setSquaresOccupied((prevSquares) =>
            prevSquares.filter((square) => square !== randomSquare)
          );
          playerTurnIsOver(setAIsTurn, setMyTurn);
        }
      }, 2000);
    }
  }
};

const testFunction = () => {
  if (hasGameStarted) {
    checkIfWinOrDraw(squaresOccupied, whoIsWinner, setDraw, setWin);
    displayWinOrDraw(win, draw);
  }
};
*/
