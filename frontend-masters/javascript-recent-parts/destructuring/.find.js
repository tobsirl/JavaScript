const arr = [{ a: 1 }, { a: 2 }];

arr.find(function match(v) {
  return v && v.a > 1;
});

arr.find(function match(v) {
  return v && v.a > 10;
});

