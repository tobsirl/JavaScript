const people = [{ name: 'John' }, { name: 'Ann' }];

const nameStartingWithJ = people.filter((person) =>
  person.name.startsWith('J')
);
nameStartingWithJ;
