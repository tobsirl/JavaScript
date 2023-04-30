# 1. Promise Basics

## 1.1. What is a Promise?

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
