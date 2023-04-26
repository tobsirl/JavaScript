// Promise basics
const promise = fetch('https://jsonplaceholder.typicode.com/todos');

// add a fulfillment and rejection handler
promise.then(
  (response) => {
    // fulfillment
    console.log(response.status);
    console.log(response)
  },
  (reason) => {
    // rejection
    console.log(reason.message);
  }
);
