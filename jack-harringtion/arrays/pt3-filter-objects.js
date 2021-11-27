const people = [{ name: 'John' }, { name: 'Ann' }];

// const nameStartingWithJ = people.filter((person) =>
//   person.name.startsWith('J')
// );

// using destructing
const nameStartingWithJ = people.filter(({ name }) => name.startsWith('J'));
nameStartingWithJ;
nameStartingWithJ[0].name = 'Jack';
nameStartingWithJ;
people;
