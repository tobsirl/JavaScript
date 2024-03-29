// Promise basics
// const promise = fetch('https://jsonplaceholder.typicode.com/todos');

// // add a fulfillment and rejection handler
// promise.then(
//   (response) => {
//     // fulfillment
//     console.log(response.status);
//     console.log(response);
//   },
//   (reason) => {
//     // rejection
//     console.log(reason.message);
//   }
// );

// // add another fulfillment handler
// promise.then((response) => {
//   // fulfillment
//   console.log(response.statusText);
// });

// // add another rejection handler
// promise.catch((reason) => {
//   // rejection
//   console.log(reason.message);
// });

// Assigning Rejection Handlers with catch()
// const promise = fetch('https://jsonplaceholder.typicode.com/todosasdfa');

// promise.catch((reason) => {
//   // rejection
//   console.log(reason.message);
// });

// // is the same as:
// promise.then(null, (reason) => {
//   // rejection
//   console.error(reason.message);
// });

// // fetch() will return a even if the response is not ok
// promise.then((response) => {
//   // fulfillment
//   if (response.ok) {
//     console.log('response is ok');
//   } else {
//     console.log('response is not ok');
//   }
// });

// Assigning Settlement Handlers with finally()
// const promise = fetch('https://jsonplaceholder.typicode.com/todos');

// promise.finally(() => {
//   // no way to know if fulfilled or rejected
//   console.log('This will always be executed');
// });

// // is the same as:
// const callback = () => {
//   console.log('This will always be executed');
// };

// promise.then(callback, callback);

// Assigning Handlers to Settled Promises
// const promise = fetch('https://jsonplaceholder.typicode.com/todos');

// // original fulfillment handler
// promise.then((response) => {
//   console.log(response.status);

//   // now add another
//   promise.then((response) => {
//     console.log(response.statusText);
//   });
// });

// Creating New (Unsettled) Promises
// const promise = new Promise((resolve, reject) => {
//   console.log('Executor');
//   resolve(42);
// });

// promise.then((result) => {
//   console.log(result);
// })

// Executor Errors
// const promise = new Promise((resolve, reject) => {
//   console.log('Executor');
//   throw new Error("Uh oh!");

// });

// promise.catch((error) => {
//   console.log(error.message);
// });

// Creating Settled Promises
// Using Promise.resolve()
// const promise = Promise.resolve(42);

// promise.then((result) => {
//   console.log(result);
// });

// Using Promise.reject()
// const promise = Promise.reject(42);

// promise.catch((error) => {
//   console.log(error);
// });

// Non-Promise Thenables
const thenable = {
  then(resolve, reject) {
    resolve(42);
  },
};

const promiseResolve = Promise.resolve(thenable);
promiseResolve.then((result) => {
  console.log('resolve', result);
});

const thenableReject = {
  then(resolve, reject) {
    reject(42);
  },
};

const promiseReject = Promise.reject(thenableReject);
promiseReject.catch((error) => {
  console.log('reject', error);
});
