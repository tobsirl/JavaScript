// Chaining Promises
const promise = Promise.resolve(42);

promise
  .then((value) => {
    console.log('value :>> ', value);
  })
  .then(() => {
    console.log('Finished');
  });

// Unchained Promises
const promise1 = Promise.resolve(42);

promise2 = promise1.then((value) => {
  console.log('value :>> ', value);
});

promise2.then(() => {
  console.log('Finished');
});
