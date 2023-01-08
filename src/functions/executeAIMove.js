export const executeAIMove = (square, AILetter) => {
  document.getElementById(square).textContent = AILetter;
  return square;
};
