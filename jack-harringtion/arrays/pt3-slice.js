const numbers = [10, 20, 30, 40, 50];

const middleThree = numbers.filter((_, i, arr) => i > 0 && i < arr.length - 1);
middleThree;

const easierMiddleThree = numbers.slice(1, 4);

numbers.slice();
numbers.slice(1);
numbers.slice(-1);
numbers.slice(-2);
