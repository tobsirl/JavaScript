/*
Use startsWith(), endsWith(), and includes() to check substrings
*/
const str = "Hello, world!";
console.log(str.startsWith("Hello"));
console.log(str.endsWith("world!"));
console.log(str.includes("o, w"));

const original = "abc";
const result = original.repeat(3);
console.log(result);

const strpadding = "5";
const paddedStart = strpadding.padStart(5, "-");
const paddedEnd = strpadding.padEnd(5, "-");
console.log(paddedStart, paddedEnd);

/*
Use trimStart and trimEnd to trim whitespace from the string
*/
const strtrim = "   Hello, world!   ";
const trimmedStart = strtrim.trimStart();
const trimmedEnd = strtrim.trimEnd();
console.log(trimmedStart, trimmedEnd);
