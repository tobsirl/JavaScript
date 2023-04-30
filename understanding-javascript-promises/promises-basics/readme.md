# 1. Promise Basics

## The Promise Lifecycle

Each promise has a lifecycle that starts in the pending state, then transitions to either fulfilled or rejected. Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).

```javascript
const promise = fetch('https://jsonplaceholder.typicode.com/todos');

// add a fulfillment and rejection handler
promise.then(
  (response) => {
    // fulfillment
    console.log(response.status);
    console.log(response);
  },
  (reason) => {
    // rejection
    console.log(reason.message);
  }
);

// add another fulfillment handler
promise.then((response) => {
  // fulfillment
  console.log(response.statusText);
});

// add another rejection handler
promise.catch((reason) => {
  // rejection
  console.log(reason.message);
});
```
