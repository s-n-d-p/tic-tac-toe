import { useState } from "react";
import "./App.css";
import Board from "./Components/Board";

function App() {
  const [turn, setTurn] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState("");
  return (
    <div className="App">
      <div>
        {isGameOver
          ? winner !== ""
            ? `${winner} won!`
            : "Game over"
          : turn
          ? "O's turn"
          : "X's turn"}
      </div>
      <Board
        turn={turn}
        setTurn={setTurn}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        setWinner={setWinner}
      />
    </div>
  );
}

export default App;
