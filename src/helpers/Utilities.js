export const capitalize = function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export const uniqueRandomNumbers = function uniqueRandomNumbers(amount, max) {
  let randomNumbers = [];
  while (randomNumbers.length < amount) {
    const randomNum = Math.floor(Math.random() * max);
    if (!randomNumbers.includes(randomNum)) {
      randomNumbers.push(randomNum);
    }
  }
  return randomNumbers;
};
