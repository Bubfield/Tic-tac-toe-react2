export const displayWinOrDraw = (win, draw) => {
  //hide gameboard and show win or draw if there is a win or draw
  if (win || draw) {
    let gameboard = document.querySelector(".gameboard");
    let win = document.querySelector(".win");
    gameboard.style.display = "none";
    win.style.display = "flex";
  }
};
