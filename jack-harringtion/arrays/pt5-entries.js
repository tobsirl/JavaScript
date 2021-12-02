const values = [10, 20, 30, 40, 50];

values.entries();
for (const value of values.entries()) {
  console.log(value);
}

for (const value of values.keys()) {
  console.log(value);
}

for (const value of values.values()) {
  console.log(value);
}
