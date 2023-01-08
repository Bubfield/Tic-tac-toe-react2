export const getWinboardStyle = () => {
  let win1 = document.querySelector(".win");
  let winStyle = window.getComputedStyle(win1);
  return winStyle;
};
