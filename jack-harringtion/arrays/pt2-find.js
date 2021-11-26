const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

console.log(names.find((name) => name === 'Alice'));

const people = [{ name: 'John' }, { name: 'Jane' }];

const person = people.find((person) => person.name === 'John');
person;
person.name = 'Jimmy';
person;
people;
