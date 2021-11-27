const numbers = [10, -20, 30, -40, 50];

const allPositive = numbers.filter((num) => num > 0);
allPositive;

const allNegatives = numbers.filter((num) => num < 0);
allNegatives;

const positiveUnder50 = numbers
  .filter((num) => num > 0)
  .filter((num) => num < 50);
positiveUnder50;
