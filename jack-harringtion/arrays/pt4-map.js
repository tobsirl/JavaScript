const numbers = [10, 20, 30, 40, 50];

const numbersTimes10 = numbers.map((num) => num * 10);
numbersTimes10;

const numbersTimes10Obj = numbers.map((num) => {
  return {
    value: num * 10,
  };
});

numbersTimes10Obj;

const numbersWithNegatives = [-10, 20, 30, -40, -50];
