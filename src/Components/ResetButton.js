import React from "react";

const ResetButton = ({ onClickHandler }) => {
  return (
    <button className="ResetButton" onClick={onClickHandler}>
      Restart Game!
    </button>
  );
};

export default ResetButton;
