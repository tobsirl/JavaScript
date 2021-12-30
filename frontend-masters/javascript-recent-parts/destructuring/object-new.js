function data() {
  return { a: 1, c: 3, d: 4 };
}

const { a: first, b: second = 42, c: third, ...rest } = data();

rest;

second;
