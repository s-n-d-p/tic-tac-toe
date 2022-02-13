import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "../App.css";
import BoardBlock from "./BoardBlock";
import ResetButton from "./ResetButton";

const Board = (props) => {
  const [firstRowConfig, setFirstRowConfig] = useState(["-", "-", "-"]);
  const [secondRowConfig, setSecondRowConfig] = useState(["-", "-", "-"]);
  const [thirdRowConfig, setThirdRowConfig] = useState(["-", "-", "-"]);

  const rowConfig = [firstRowConfig, secondRowConfig, thirdRowConfig];
  const setRowConfig = [
    setFirstRowConfig,
    setSecondRowConfig,
    setThirdRowConfig,
  ];

  const resetButtonClickHandler = () => {
    [0, 1, 2].forEach((index) => {
      setRowConfig[index](["-", "-", "-"]);
    });
    props.setTurn(true);
    props.setIsGameOver(false);
  };

  const winTheLine = (line, lastTurn) => {
    return lastTurn === line[0] && line[0] === line[1] && line[1] === line[2];
  };

  useEffect(() => {
    // did someone win the game
    const lastTurn = props.turn ? "X" : "O";
    let win = false;
    for (let i = 0; i < 3; ++i) {
      if (
        winTheLine(rowConfig[i], lastTurn) /* win the row*/ ||
        winTheLine(
          /* win the column */
          [rowConfig[0][i], rowConfig[1][i], rowConfig[2][i]],
          lastTurn
        )
      ) {
        win = true;
        break;
      }
    }
    win =
      win ||
      winTheLine(
        [rowConfig[0][0], rowConfig[1][1], rowConfig[2][2]],
        lastTurn
      ) ||
      winTheLine(
        [rowConfig[0][2], rowConfig[1][1], rowConfig[2][0]],
        lastTurn
      ); /* win any of the diagonal */

    if (win) {
      props.setIsGameOver(true);
      props.setWinner(lastTurn);
    }
  });

  return (
    <>
      <div className="board">
        <div>
          {[0, 1, 2].map((i) => {
            return (
              <BoardBlock
                {...props}
                config={rowConfig[0]}
                setConfig={setRowConfig[0]}
                index={i}
                key={[0, i]}
              />
            );
          })}
        </div>
        <div>
          {[0, 1, 2].map((i) => {
            return (
              <BoardBlock
                {...props}
                config={rowConfig[1]}
                setConfig={setRowConfig[1]}
                index={i}
                key={[1, i]}
              />
            );
          })}
        </div>
        <div>
          {[0, 1, 2].map((i) => {
            return (
              <BoardBlock
                {...props}
                config={rowConfig[2]}
                setConfig={setRowConfig[2]}
                index={i}
                key={[2, i]}
              />
            );
          })}
        </div>
      </div>
      <ResetButton onClickHandler={resetButtonClickHandler} />
    </>
  );
};

export default Board;
