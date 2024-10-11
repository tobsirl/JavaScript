// Using the rest operator to collect remaining properties
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(JSON.stringify(rest));

// Using the spread operator to combine objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combined = { ...obj1, ...obj2 };
console.log(JSON.stringify(combined));
