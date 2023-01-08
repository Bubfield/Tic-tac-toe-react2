export const executeMyMove = (e, myLetter) => {
  let square = e.target;
  square.textContent = myLetter;
  return square.id;
};
