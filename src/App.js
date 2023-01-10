import { useContext } from "react";
import Note from "./components/Note";
import RestartButton from "./components/RestartButton";
import TicTacToeHeader from "./components/TicTacToeHeader";
import ConditionallyRenderXorOComponent from "./components/ConditionallyRenderXorOComponent";
import ConditionallyRenderGameboardComponent from "./components/ConditionallyRenderGameboardComponent";
import { AppContext } from "./appStateAndFunctions";

function App() {
  const {
    usePlayAgainstAI,
    AILetter,
    AIsTurn,
    hasGameStarted,
    squaresOccupied,
    playerMakesFirstMove,
    checkIfWinOrDraw,
    displayWinOrDraw,
    useCheckWinOrDraw,
  } = useContext(AppContext);

  usePlayAgainstAI(
    AILetter,
    AIsTurn,
    hasGameStarted,
    playerMakesFirstMove,
    squaresOccupied
  );

  useCheckWinOrDraw(hasGameStarted, checkIfWinOrDraw, displayWinOrDraw);

  return (
    <>
      <TicTacToeHeader />
      <ConditionallyRenderXorOComponent />
      <ConditionallyRenderGameboardComponent />
      <RestartButton />
      <Note />
    </>
  );
}

export default App;
