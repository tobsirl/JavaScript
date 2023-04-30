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
const promise = fetch('https://jsonplaceholder.typicode.com/todosasdfa');

promise.catch((reason) => {
  // rejection
  console.log(reason.message);
});

// is the same as:
promise.then(null, (reason) => {
  // rejection
  console.error(reason.message);
});

// fetch() will return a even if the response is not ok
promise.then((response) => {
  // fulfillment
  if (response.ok) {
    console.log('response is ok');
  } else {
    console.log('response is not ok');
  }
});
