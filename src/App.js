import { useState, useEffect, useCallback } from "react";
import Note from "./components/Note";
import RestartButton from "./components/RestartButton";
import TicTacToeHeader from "./components/TicTacToeHeader";
import ConditionallyRenderXorOComponent from "./components/ConditionallyRenderXorOComponent";
import ConditionallyRenderGameboardComponent from "./components/ConditionallyRenderGameboardComponent";
import {
  getWinboardStyle,
  playerMakesFirstMove,
  AIPicksSquareToMoveOn,
  executeAIMove,
  playerTurnIsOver,
  checkIfWinOrDraw,
  displayWinOrDraw,
  squareIsNotOccupied,
  executeMyMove,
} from "./functions";

function App() {
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

  useEffect(() => {
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
  }, [AILetter, AIsTurn, hasGameStarted, squaresOccupied]);

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

  useEffect(() => {
    if (hasGameStarted) {
      checkIfWinOrDraw(squaresOccupied, whoIsWinner, setDraw, setWin);
      displayWinOrDraw(win, draw);
    }
  }, [draw, hasGameStarted, squaresOccupied, whoIsWinner, win]);

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

  return (
    <>
      <TicTacToeHeader />
      <ConditionallyRenderXorOComponent
        props={{ myLetter, setMyLetter, setAILetter }}
      />
      <ConditionallyRenderGameboardComponent
        props={{
          hasGameStarted,
          myName,
          setMyName,
          startGame,
          handleClickOnSquare,
          draw,
          winner,
        }}
      />
      <RestartButton handleRestart={handleRestart} />
      <Note />
    </>
  );
}

export default App;
