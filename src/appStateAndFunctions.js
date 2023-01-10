import { createContext, useState, useEffect, useCallback } from "react";

export const useAppState = () => {
  const [myLetter, setMyLetter] = useState("");
  const [myName, setMyName] = useState("");
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [squaresOccupied, setSquaresOccupied] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  const [win, setWin] = useState(false);
  const [AILetter, setAILetter] = useState("");
  const [winner, setWinner] = useState("");
  const [draw, setDraw] = useState(false);
  const [myTurn, setMyTurn] = useState(false);
  const [AIsTurn, setAIsTurn] = useState(false);

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

  const handleMyLetter = (e) => {
    let text = e.target.textContent;
    setMyLetter(text);
    if (text === "X") {
      setAILetter("O");
    } else {
      setAILetter("X");
    }
  };

  const startGame = (e) => {
    e.preventDefault();
    if (myLetter && myName) {
      setHasGameStarted(true);
    }
  };

  const playerMakesFirstMove = (player) => {
    if (player === "X" && !!squaresOccupied[8]) {
      return true;
    }
  };

  const squareIsNotOccupied = (e) => {
    return !e.target.textContent;
  };

  const executeMyMove = (e) => {
    let square = e.target;
    square.textContent = myLetter;
    return square.id;
  };

  const playerTurnIsOver = (setPlayer1Turn, setPlayer2Turn) => {
    setPlayer1Turn(false);
    setPlayer2Turn(true);
  };

  const handleClickOnSquare = (e) => {
    if (playerMakesFirstMove(myLetter) || (myTurn && squareIsNotOccupied(e))) {
      let playerChosenSquare = executeMyMove(e);
      setSquaresOccupied(
        squaresOccupied.filter((elem) => elem !== playerChosenSquare)
      );
      playerTurnIsOver(setMyTurn, setAIsTurn);
    } else {
      return;
    }
  };

  const whoIsWinner = useCallback(
    (num1, num2, num3) => {
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
    },
    [myLetter, myName]
  );

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

  const getWinboardStyle = () => {
    let win1 = document.querySelector(".win");
    let winStyle = window.getComputedStyle(win1);
    return winStyle;
  };

  const checkIfWin = useCallback(
    (one, two, three, four, five, six, seven, eight, nine) => {
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
    },
    [whoIsWinner]
  );

  const checkIfDraw = useCallback(
    (one, two, three, four, five, six, seven, eight, nine) => {
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
    },
    [squaresOccupied, whoIsWinner]
  );

  const checkIfWinOrDraw = useCallback(() => {
    const { one, two, three, four, five, six, seven, eight, nine } =
      grabAllSquareByIDs();

    if (checkIfDraw(one, two, three, four, five, six, seven, eight, nine)) {
      setDraw(true);
    } else if (
      checkIfWin(one, two, three, four, five, six, seven, eight, nine)
    ) {
      setWin(true);
    }
  }, [checkIfWin, checkIfDraw]);

  const usePlayAgainstAI = (
    AILetter,
    AIsTurn,
    hasGameStarted,
    playerMakesFirstMove,
    squaresOccupied
  ) => {
    useEffect(() => {
      if (hasGameStarted) {
        let winStyle = getWinboardStyle();
        if (playerMakesFirstMove(AILetter) || AIsTurn) {
          let randomSquare = AIPicksSquareToMoveOn();
          setTimeout(() => {
            if (winStyle.display === "none") {
              executeAIMove(randomSquare);
              setSquaresOccupied((prevSquares) =>
                prevSquares.filter((square) => square !== randomSquare)
              );
              playerTurnIsOver(setAIsTurn, setMyTurn);
            }
          }, 2000);
        }
      }
    }, [
      AILetter,
      AIsTurn,
      hasGameStarted,
      playerMakesFirstMove,
      squaresOccupied,
    ]);
  };

  const displayWinOrDraw = () => {
    //hide gameboard and show win or draw if there is a win or draw
    if (win || draw) {
      let gameboard = document.querySelector(".gameboard");
      let win = document.querySelector(".win");
      gameboard.style.display = "none";
      win.style.display = "flex";
    }
  };

  const executeAIMove = (square) => {
    document.getElementById(square).textContent = AILetter;
    return square;
  };

  const AIPicksSquareToMoveOn = () => {
    let randomNum = Math.floor(Math.random() * squaresOccupied.length);
    let randomSquare = squaresOccupied[randomNum];
    return randomSquare;
  };

  const useCheckWinOrDraw = (
    hasGameStarted,
    checkIfWinOrDraw,
    displayWinOrDraw
  ) => {
    useEffect(() => {
      if (hasGameStarted) {
        checkIfWinOrDraw();
        displayWinOrDraw();
      }
    }, [hasGameStarted, checkIfWinOrDraw, displayWinOrDraw]);
  };

  return {
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
    handleRestart,
    startGame,
    handleClickOnSquare,
    usePlayAgainstAI,
    useCheckWinOrDraw,
    playerMakesFirstMove,
    checkIfWinOrDraw,
    displayWinOrDraw,
    squareIsNotOccupied,
    executeMyMove,
    playerTurnIsOver,
    handleMyLetter,
  };
};

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const AppState = useAppState();
  return <AppContext.Provider value={AppState}>{children}</AppContext.Provider>;
};
