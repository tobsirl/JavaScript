// Fundamentals: Return 8kya
// https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

// Training JS #3: Basic data types--String
// https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript
// In javascript, String is one of basic data types. Use "" or '' to declare a string variable.
// It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..
// String can use operators +, Connect two or more strings together.
// #Task
// misson 1:
// I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// misson 2:
// After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3
// If everything is right, click "Submit" again to submit your code pass this kata.
let a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "";
}
function answer2() {
  //the answer should be "yes" or "no"
  return "";
}
function answer3() {
  //the answer should be "yes" or "no"
  return "";
}

// Training JS #1: create your first JS function and print "Hello World!" (8kyu)
// https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/train/javascript
function helloWorld() {
  var str = "Hello World!";
  console.log(str);
  return str;
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else (8kyu)
// https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
function trueOrFalse(val) {
  if (val) return "true";
  else return "false";
}

// Training JS #2: Basic data types--Number (8kyu)
// https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript
// Task
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables
// v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// In the end, click "Submit" to submit your code pass this kata.
let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;
function equal1() {
  var a = v1;
  var b = v1;
  return a + b;
}
//Please refer to the example above to complete the following functions
function equal2() {
  var a = v4; //set number value to a
  var b = v2; //set number value to b
  return a - b;
}
function equal3() {
  var a = v1; //set number value to a
  var b = v5; //set number value to b
  return a * b;
}
function equal4() {
  var a = v4; //set number value to a
  var b = v5; //set number value to b
  return a / b;
}
function equal5() {
  var a = v6; //set number value to a
  var b = v3; //set number value to b
  return a % b;
}

// Fuel Calculator: Total Cost (8kyu)
// https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript
// In this kata you will have to write a function that takes litres and pricePerLiter as arguments. Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per liter cannot be more than 25 cents. round answer to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
function fuelPrice(litres, pricePerLiter) {
  let discount = 0;
  if (litres >= 2) discount = 0.05;
  if (litres >= 4) discount = 0.1;
  if (litres >= 6) discount = 0.15;
  if (litres >= 8) discount = 0.2;
  if (litres >= 10) discount = 0.25;
  return Number((litres * (pricePerLiter - discount)).toFixed(2));
}
