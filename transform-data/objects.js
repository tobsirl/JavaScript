const user = {
  name: 'John',
  age: 29,
};

const values = Object.keys(user).map((el) => user[el]); //?

// Practical use
const ageExists = Object.keys(user).includes('age'); //?

// Using Object.values()
Object.values(user); //?

const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95,
};

const monthlyTotal = Object.values(monthlyExpenses).reduce(
  (total, expence) => total + expence,
  0
); //?
