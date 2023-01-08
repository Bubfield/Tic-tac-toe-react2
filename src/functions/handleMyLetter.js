export const handleMyLetter = (e, setMyLetter, setAILetter) => {
  let text = e.target.textContent;
  setMyLetter(text);
  if (text === "X") {
    setAILetter("O");
  } else {
    setAILetter("X");
  }
};
