const numbers = [10, 20, 30, 40, 50];

const numbersTimes10 = numbers.map((num) => num * 10);
numbersTimes10;

const numbersTimes10Obj = numbers.map((num) => {
  return {
    value: num * 10,
  };
});

numbersTimes10Obj;

const numbersWithNegatives = [-10, 20, 30, -40, -50];
const positiveBy10 = numbersWithNegatives
  .filter((num) => num > 0)
  .map((num) => num * 10);
positiveBy10;

const people = [
  { first: 'Jane', last: 'Smith', address: { city: 'Oakland' } },
  { first: 'Sally', last: 'Joe', address: { city: 'Foster City' } },
];

const fullNames = people.map((person) => {
  return {
    ...person,
    fullName: `${person.first} ${person.last}`,
  };
});
fullNames;
