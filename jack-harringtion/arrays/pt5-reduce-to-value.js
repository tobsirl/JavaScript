const numbers = [10, 20, 30, 40, 50];

let sum = 0;
for (const value of numbers) {
  sum += value;
}
sum;

// reduce
numbers.reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);

numbers.reduce((sum, value) => sum + value, 0);

numbers.reduce((avg, value, _, arr) => avg + value / arr.length, 0);

const names = ['LG', 'Mimi', 'Sadie', 'Ripley'];

names.reduce((str, name, index) => str + (index > 0 ? ', ' : '') + name, '');

names.join(', ');
