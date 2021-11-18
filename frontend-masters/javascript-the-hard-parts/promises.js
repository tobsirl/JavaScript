// Challenge 1
// Let's start by reviewing asynchronous functions! Using setTimeout, print the string 'Hello!' after 1000ms.

function sayHello() {
  setTimeout(function () {
    console.log('Hello');
  }, 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms

/*
 *Challenge 2
 * Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout.
 * Print the contents of the promise after it has been resolved by passing console.log to .then
 */
var promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  setTimeout(() => {
    resolve('Resolved');
  }, 1000);
});

// Should print out "Resolved!"
// ADD CODE HERE
promise.then((data) => console.log(data));

// Challenge 3
/*
 * Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected by
 * passing console.log to .catch
 */

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  reject('Reject!');
});

// Should print out "Reject!"
// ADD CODE HERE
promise.catch((res) => console.log(res));

// Challenge 4
/*
 * Promises are asynchronous and we're now going to prove that they indeed are! Create a promise and have it resolve with the value of "Promise has been resolved!"
 * Then uncomment the code at bottom of Challenge 4. What order do we expect "Promise has been resolved!" and "I'm not the promise!" to print? Why?
 */

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
});

// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!'));
// console.log("I'm not the promise!");

// Challenge 5
function delay() {}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// delay().then(sayHello);

// Challenge 6
//
// ADD CODE BELOW
// var secondPromise =
// var firstPromise =

// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: 'index out of range' });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
}
