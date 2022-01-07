/* 
Challenge 1
Let's start by reviewing asynchronous functions! Using setTimeout, print the string 'Hello!' after 1000ms.
*/

function sayHello() {
  setTimeout(() => {
    console.log('Hello!');
  }, 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms

/* 
Challenge 2
Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then
*/
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved!');
  }, 1000);
});

// Should print out "Resolved!"
promise.then((data) => console.log(data));

/* 
Challenge 3
Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch
*/

promise = new Promise(function(resolve, reject) {
  // ADD CODE HERE
})

// Should print out "Reject!"
// ADD CODE HERE
