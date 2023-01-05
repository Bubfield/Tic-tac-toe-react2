import React from "react";
import { useLayoutEffect, useRef } from "react";

const Gameboard = ({ props }) => {
  const {
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
  } = props;

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    /*if AI is X && no squares are occupied, 
    this means we are on the first move, 
    and that the AI gets to make the first move*/
    function DoesAIMakeFirstMove() {
      //if AI is X and no moves have been made
      if (AI === "X" && !!squaresOccupied[8]) {
        setAIFirstMove(true);
        setTimeout(() => {
          const whatIsNameDiv = document.querySelector(".what-is-name-div");
          /*if user hits reset button while AI is making first 
          move, this will cause whatIsNameDiv to be true. 
          If it is false then that means we can allow the AI to  
          make its move, but if whatIsNameDiv is true, stop the AI from 
          making its move to prevent DOM error(gameboard element 
          no longer exists after reset button is pressed)*/
          if (!whatIsNameDiv) {
            let randomSquareID = String(Math.ceil((Math.random() + 0.01) * 9));
            document.getElementById(randomSquareID).textContent = AI;
            setSquaresOccupied((prevArr) =>
              prevArr.filter((elem) => elem !== randomSquareID)
            );
            setAIFirstMove(false);
          }
        }, 2000);
      }
    }

    DoesAIMakeFirstMove();

    /*function that runs every time a move is made,
    which determines if there is a win or draw present
    based on the squares occupied and their text content*/
    function checkIfWinOrDraw(playerLetter) {
      function whoIsWinner(num1, num2, num3) {
        /*if given squares are all occupied, 
    and these squares are all equal to each other, 
    then check if those squares are occupied by 
    either the player or the AI and set them as the winner*/
        if (num1 && num2 && num3 && num1 === num2 && num1 === num3) {
          if (num1 === playerLetter) {
            setWinner(playerName);
          } else {
            setWinner("The Computer");
          }
          return true;
        } else {
          return false;
        }
      }

      let one = document.getElementById("1").textContent;
      let two = document.getElementById("2").textContent;
      let three = document.getElementById("3").textContent;
      let four = document.getElementById("4").textContent;
      let five = document.getElementById("5").textContent;
      let six = document.getElementById("6").textContent;
      let seven = document.getElementById("7").textContent;
      let eight = document.getElementById("8").textContent;
      let nine = document.getElementById("9").textContent;

      /*if all squares are occupied and isWinOrDraw returns false
  for all winning square combinations then this is a draw*/
      if (
        !squaresOccupied[0] &&
        !whoIsWinner(one, two, three) &&
        !whoIsWinner(four, five, six) &&
        !whoIsWinner(seven, eight, nine) &&
        !whoIsWinner(one, four, seven) &&
        !whoIsWinner(two, five, eight) &&
        !whoIsWinner(three, six, nine) &&
        !whoIsWinner(one, five, nine) &&
        !whoIsWinner(three, five, seven)
      ) {
        setDraw(true);
        /*if isWinOrDraw returns true for any combination
    of winning squares then this is a win*/
      } else if (
        whoIsWinner(one, two, three) ||
        whoIsWinner(four, five, six) ||
        whoIsWinner(seven, eight, nine) ||
        whoIsWinner(one, four, seven) ||
        whoIsWinner(two, five, eight) ||
        whoIsWinner(three, six, nine) ||
        whoIsWinner(one, five, nine) ||
        whoIsWinner(three, five, seven)
      ) {
        setWin(true);
      }
    }

    checkIfWinOrDraw(playerLetter);

    //hide gameboard and show winner or draw if there is a win or draw
    const gameBoardDisplay = () => {
      if (win || draw) {
        let gameboard = document.querySelector(".gameboard");
        let win = document.querySelector(".win");
        gameboard.style.display = "none";
        win.style.display = "flex";
      }
    };
    gameBoardDisplay();
  }, [
    squaresOccupied,
    win,
    playerLetter,
    playerName,
    setWin,
    setWinner,
    setDraw,
    setSquaresOccupied,
    draw,
    AI,
    setAIFirstMove,
  ]);

  const UpdateSquaresArrayAndMakeMoves = (e) => {
    //player move is made
    let chosenSquare = e.target.id;
    e.target.textContent = playerLetter;
    /*copy of squares array that is up to date and is
  used to help determine the available squares for the AI
  to make its move*/
    let copyOfSquaredOccupiedArray = squaresOccupied.filter(
      (elem) => elem !== chosenSquare
    );
    //squares array is updated
    setSquaresOccupied((prevArr) =>
      prevArr.filter((elem) => elem !== chosenSquare)
    );
    //random index is generated
    let randomNum = Math.floor(
      Math.random() * copyOfSquaredOccupiedArray.length
    );
    let randomIndex = copyOfSquaredOccupiedArray[randomNum];

    setTimeout(() => {
      let win = document.querySelector(".win");
      /*makes sure win exists before executing next if statement
    this is to stop error of when pressing the reset button
    immediately after making a move, the AI still 
    tries to make a move, causing an error
    because it tries to grab win.style.display, but win
    does not exist*/
      if (win) {
        /*if the Win component's style does not equal flex, this 
      means the gameboard is displayed which means the AI can make a move.
      used to stop the AI from making moves if the game is over*/
        if (win.style.display !== "flex") {
          setAIMoveInProgress(false);
          //AI makes its move
          document.getElementById(randomIndex).textContent = AI;
          //copy of squares array and squares array are both updated
          copyOfSquaredOccupiedArray = copyOfSquaredOccupiedArray.filter(
            (elem) => elem !== randomIndex
          );
          setSquaresOccupied(copyOfSquaredOccupiedArray);
        }
      }
    }, 2000);
  };

  const handleClickOnSquare = (e) => {
    /*if AI is X, then it gets to make the first move, 
    so this prevents the user from making a move until AI has made it*/
    if (AIFirstMove) {
      return;
    }
    /*if square does not already have text content, 
    then the user has made a valid move*/
    let textContent = e.target.textContent;
    if (!textContent) {
      //if AI is not in the process of making a move, then user can make a move
      if (!AIMoveInProgress) {
        setAIMoveInProgress(true);
        UpdateSquaresArrayAndMakeMoves(e);
      }
    }
  };

  const gameboardSquares = Array(9).fill(0);

  return (
    <>
      <div className="gameboard">
        {gameboardSquares.map((i, index) => (
          <div
            className="gameboard-square"
            onClick={(e) => handleClickOnSquare(e)}
            key={index}
            id={index + 1}
          ></div>
        ))}
      </div>
      <div className="win">
        {!draw ? <h1>{winner} wins!!!</h1> : <h1>Draw!</h1>}
      </div>
    </>
  );
};

export default Gameboard;
