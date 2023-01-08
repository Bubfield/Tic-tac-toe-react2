export const grabAllSquareByIDs = () => {
  let one = document.getElementById("1").textContent;
  let two = document.getElementById("2").textContent;
  let three = document.getElementById("3").textContent;
  let four = document.getElementById("4").textContent;
  let five = document.getElementById("5").textContent;
  let six = document.getElementById("6").textContent;
  let seven = document.getElementById("7").textContent;
  let eight = document.getElementById("8").textContent;
  let nine = document.getElementById("9").textContent;
  return { one, two, three, four, five, six, seven, eight, nine };
};
