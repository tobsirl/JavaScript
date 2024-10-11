/*
Use the nullish coalescing operator ?? to provide a default value
*/
const value = null;
//const result = value ? 'default' : undefined;
const result = value ?? "default";

console.log(result);
