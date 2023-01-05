import { useState, createContext } from "react";

export const AppContext = createContext(null);

export function CreateAppState() {
  const [playerName, setPlayerName] = useState("");
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
  const [AI, setAI] = useState("");
  const [winner, setWinner] = useState("");
  const [AIMoveInProgress, setAIMoveInProgress] = useState(false);
  const [draw, setDraw] = useState(false);
  const [AIFirstMove, setAIFirstMove] = useState(false);

  let value = [
    playerName,
    setPlayerName,
    squaresOccupied,
    setSquaresOccupied,
    win,
    setWin,
    AI,
    setAI,
    winner,
    setWinner,
    AIMoveInProgress,
    setAIMoveInProgress,
    draw,
    setDraw,
    AIFirstMove,
    setAIFirstMove,
  ];

  return value;
}
