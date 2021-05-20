const user = {
  name: 'John',
  age: 29,
};

const values = Object.keys(user).map((el) => user[el]); //?

// Practical use
const ageExists = Object.keys(user).includes('age'); //?

// Using Object.values()
Object.values(user); //?

