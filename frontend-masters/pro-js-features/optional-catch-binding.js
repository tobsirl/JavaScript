/*
Rewrite the following catch blocks to omit the error parameter if it's not used
*/
try {
  // some code that might throw
} catch {
  console.error("An error occurred");
}

try {
  // some code that might throw
} catch {
  // do nothing
}
