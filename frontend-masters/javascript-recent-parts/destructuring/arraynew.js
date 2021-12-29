function data() {
  return [1, [2, 3], 4];
}

const [first, [second, third], fourth] = data() || [];
