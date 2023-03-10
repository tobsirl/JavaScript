const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  fullName: `${firstName} ${lastName}`,
  email,
  checkLastOnline: () => {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  },
  sendEmail: () => {
    console.log(`Email sent to ${email}`);
  },
  delete: () => {
    console.log('User removed');
  },
});

const user = createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user2 = createUser({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});

console.log(user.delete === user2.delete);
