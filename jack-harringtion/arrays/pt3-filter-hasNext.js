const numbers = [9, 10, 11, 13, 14, 15];

const hasNext = numbers.filter((num, _, array) => array.includes(num + 1));
hasNext 