export const checkIfWin = (
  whoIsWinner,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine
) => {
  return (
    whoIsWinner(one, two, three) ||
    whoIsWinner(four, five, six) ||
    whoIsWinner(seven, eight, nine) ||
    whoIsWinner(one, four, seven) ||
    whoIsWinner(two, five, eight) ||
    whoIsWinner(three, six, nine) ||
    whoIsWinner(one, five, nine) ||
    whoIsWinner(three, five, seven)
  );
};
