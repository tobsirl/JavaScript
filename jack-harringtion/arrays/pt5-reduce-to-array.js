const numbers = [1, 2, 3, 4, 5];

let arr = [];
for (const number of numbers) {
  arr = [...arr, number];
}
arr;

numbers.reduce((arr, number) => [...arr, number], []);

numbers.reduceRight((arr, number) => [...arr, number], []);

const groups = [
  [3, 2],
  [2, 5],
  [3, 7],
];

groups.reduce((arr, [count, value]) => {
  for (let index = 0; index < count; index++) {
    arr.push(value);
  }
  return arr;
}, []);

Array(3).fill('!');
groups.reduce(
  (arr, [count, value]) => [...arr, ...Array(count).fill(value)],
  []
); //? 
