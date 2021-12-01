const numbers = [12, 15, 12, 2, 6, 6, 12];

const lookup = {};
for (const number of numbers) {
  lookup[number] = (lookup[number] ?? 0) + 1;
}

lookup;

numbers.reduce(
  (lookup, value) => ({
    ...lookup,
    [value]: (lookup[value] ?? 0) + 1,
  }),
  {}
);
