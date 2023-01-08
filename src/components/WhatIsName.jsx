import React from "react";

const WhatIsName = ({ props }) => {
  const { myName, setMyName, startGame } = props;

  return (
    <div className="what-is-name-div">
      <h1>What is your name?</h1>
      <form className="what-is-name-form">
        <input
          type="text"
          value={myName}
          onChange={(e) => setMyName(e.target.value)}
          className="input-style"
        />
        <button onClick={(e) => startGame(e)} id="start">
          Start Game
        </button>
      </form>
    </div>
  );
};

export default WhatIsName;
