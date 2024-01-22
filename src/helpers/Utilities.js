export const capitalize = function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export const uniqueRandomNumbers = function uniqueRandomNumbers(amount, max) {
  let randomNumbers = [];
  if (amount > max) {
    for (let i = 0; i < max; i += 1) {
      randomNumbers.push(i);
    }
  } else {
    while (randomNumbers.length < amount) {
      const randomNum = Math.floor(Math.random() * max);
      if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum);
      }
    }
  }
  return randomNumbers;
};

export const getRandomItems = function getRandomItems(array, amount = 1) {
  const randomItems = [];

  while (randomItems.length < amount && array.length >= amount) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    if (!randomItems.includes(randomItem) || randomItem === '') {
      randomItems.push(randomItem);
    }
  }
  return randomItems;
};

export const shuffle = function shuffleArray(array) {
  const shuffled = [];
  const startIndex = Math.floor(Math.random() * array.length);
  // traverse from start index to end
  for (let i = startIndex; i < array.length; i += 1) {
    const randomNumber = Math.random() - 0.5;
    if (randomNumber >= 0) {
      shuffled.push(array[i]);
    } else {
      shuffled.unshift(array[i]);
    }
  }
  // traverse from start to start index
  for (let i = 0; i < startIndex; i += 1) {
    const randomNumber = Math.random() - 0.5;
    if (randomNumber >= 0) {
      shuffled.push(array[i]);
    } else {
      shuffled.unshift(array[i]);
    }
  }
  return shuffled;
};
