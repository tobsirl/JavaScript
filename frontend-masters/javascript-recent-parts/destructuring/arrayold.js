function data() {
  return [1, [2, 3], 4];
}

const tmp = data() || [];

const first = tmp[0];
const tmp2 = tmp[1];
const second = tmp2[0];
const third = tmp2[1];
const fourth = tmp.slice(3);
