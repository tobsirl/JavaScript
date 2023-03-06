import { isValidEmail, isAllLetters } from './validator.js';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
};

const userProxy = new Proxy(user, {
  get: (target, property) => {
    console.log(
      `${new Date()} | The value of ${property} is ${Reflect.get(
        target,
        property
      )}`
    );
  },
  set: (target, prop, value) => {
    if (prop === 'email') {
      if (!isValidEmail(value)) {
        throw new Error('Invalid email');
      }
    }

    if (prop === 'firstName' || prop === 'lastName') {
      if (!isAllLetters(value)) {
        throw new Error('Invalid name');
      }
    }

    if (prop === 'age') {
      if (typeof value !== 'number') {
        throw new Error('Please provide a valid age.');
      }

      if (value < 18) {
        throw 'User cannot be younger than 18.';
      }
    }

    return Reflect.set(target, prop, value);
  },
});

// userProxy.email = 'test@test.com';
userProxy.age;
userProxy.firstName;
userProxy.firstName = 'Sammy';
userProxy.firstName;
