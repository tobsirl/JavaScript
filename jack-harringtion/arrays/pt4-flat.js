const numbers = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
const flatten = numbers.flat();
flatten;

const deepNumbers = [[[[10, 20, 30]]], [[[40, 50, 60]]], [[[70, 80, 90]]]];
deepNumbers.flat();
deepNumbers.flat(2);
deepNumbers.flat(Infinity);

const values = [10, 20, 30, 40, 50];
values.map((value, index) => [value, index]);
values.flatMap((value, index) => [value, index]);

