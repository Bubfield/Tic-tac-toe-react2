import Gameboard from "./Gameboard";
import { useState } from "react";

function App() {
  const [playerLetter, setPlayerLetter] = useState("");
  const [hasGameStarted, setHasGameStarted] = useState(false);
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

  //reset all state variables
  const handleRestart = () => {
    setPlayerLetter("");
    setHasGameStarted(false);
    setPlayerName("");
    setSquaresOccupied(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    setWin(false);
    setAI("");
    setAIMoveInProgress(false);
    setDraw(false);
    setWinner("");
    setAIFirstMove(false);
  };

  /*set Player to be what they choose(X or O)
  and set AI to be the opposite of that choice*/
  const handlePlayer = (e) => {
    let text = e.target.textContent;
    setPlayerLetter(text);
    if (text === "X") {
      setAI("O");
    } else if (text === "O") {
      setAI("X");
    }
  };

  /*if player has chosen X or O, and has filled
   in their name, then you can start the game*/
  const startGame = (e) => {
    e.preventDefault();
    if (playerLetter && playerName) {
      setHasGameStarted(true);
    }
  };

  return (
    <div className="App">
      <h1 className="header">Tic Tac Toe!</h1>
      {!playerLetter ? (
        <div className="player-choice">
          <span id="x" onClick={(e) => handlePlayer(e)}>
            X
          </span>{" "}
          or{" "}
          <span id="o" onClick={(e) => handlePlayer(e)}>
            O
          </span>
          ?
        </div>
      ) : (
        ""
      )}
      {!hasGameStarted ? (
        <div className="what-is-name-div">
          <p className="what-is-name">What is your name?</p>
          <form>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="input-style"
            />
            <button onClick={(e) => startGame(e)} id="start">
              Start Game
            </button>
          </form>
        </div>
      ) : (
        <Gameboard
          props={{
            playerLetter,
            playerName,
            squaresOccupied,
            setSquaresOccupied,
            win,
            setWin,
            AI,
            winner,
            setWinner,
            draw,
            setDraw,
            setAIFirstMove,
            AIMoveInProgress,
            setAIMoveInProgress,
            AIFirstMove,
          }}
        />
      )}
      <div>
        <button id="restart" type="button" onClick={handleRestart}>
          Restart Game
        </button>
      </div>
      <div className="note-div">
        <h1 className="note-text">
          Note: X makes the first move. You must select X or O, and put in your
          name before you can start the game.
        </h1>
      </div>
    </div>
  );
}

export default App;
