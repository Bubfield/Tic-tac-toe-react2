import Gameboard from "./components/Gameboard";
import RestartButton from "./components/RestartButton";
import WhatIsNameInputAndStartButton from "./components/WhatIsNameInputAndStartButton";
import ChooseXorO from "./components/ChooseXorO";
import { useState } from "react";
import { AppContext, CreateAppState } from "./state/AppState";

function App() {
  const [playerLetter, setPlayerLetter] = useState("");
  const [hasGameStarted, setHasGameStarted] = useState(false);

  return (
    <AppContext.Provider value={CreateAppState()}>
      <div className="App">
        <h1 className="header">Tic Tac Toe!</h1>
        {!playerLetter ? <ChooseXorO setPlayerLetter={setPlayerLetter} /> : ""}
        {!hasGameStarted ? (
          <WhatIsNameInputAndStartButton
            props={{ playerLetter, setHasGameStarted }}
          />
        ) : (
          <Gameboard playerLetter={playerLetter} />
        )}
        <RestartButton props={{ setPlayerLetter, setHasGameStarted }} />
        <div className="note-div">
          <h1 className="note-text">
            Note: X makes the first move. You must select X or O, and put in
            your name before you can start the game.
          </h1>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
