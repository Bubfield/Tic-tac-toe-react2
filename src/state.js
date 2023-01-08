import { createContext, useState } from "react";

export const AppContext = createContext(null);

const CreateAppState = () => {
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
  };
};

export const AppState = CreateAppState();
