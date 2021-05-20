const user = {
  name: 'John',
  age: 29,
};

Object.keys(user).map((el) => user[el]); //?

// Practical use
const ageExists = Object.keys(user).includes('age'); //?
