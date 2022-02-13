import React, { useEffect, useState } from "react";

const BoardBlock = ({
  turn,
  setTurn,
  config,
  setConfig,
  index,
  isGameOver,
}) => {
  const boardBlockDefaultColor = "#c4c4c4";
  const [buttonColor, setButtonColor] = useState(boardBlockDefaultColor);
  const onClickHandler = () => {
    if (config[index] !== "-" || isGameOver) {
      return;
    }
    config[index] = turn ? "O" : "X";
    setButtonColor(turn ? "lightpink" : "cyan");
    setConfig(config);
    setTurn(!turn);
  };

  useEffect(() => {
    if (config[index] === "-") {
      setButtonColor(boardBlockDefaultColor);
    }
  });

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={onClickHandler}
      className="BoardButton"
    >
      {config[index]}
    </button>
  );
};

export default BoardBlock;
