const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;

// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

// if (markHigherBMI) {
//   console.log(
//     `Mark's BMI (${markBMI.toFixed(
//       2
//     )}) is higher then John's (${johnBMI.toFixed(2)})`
//   );
// } else {
//   console.log(
//     `John's BMI (${johnBMI.toFixed(
//       2
//     )}) is higher then Mark's (${markBMI.toFixed(2)})`
//   );
// }

// Coding Challenge #3
const dolphinsAvgScore = (97 + 112 + 101) / 3;
const koalasAvgScore = (109 + 95 + 123) / 3;

if (dolphinsAvgScore === koalasAvgScore) {
  console.log(`Draw! Both teams have the same score`);
} else if (dolphinsAvgScore > koalasAvgScore) {
  console.log(`Congrats to the Dolphins`);
} else {
  console.log(`Congrats to the Koalas`);
}

if (
  dolphinsAvgScore === koalasAvgScore &&
  dolphinsAvgScore > 100 &&
  koalasAvgScore > 100
) {
  console.log(`Draw! Both teams have the same score`);
} else if (
  dolphinsAvgScore > koalasAvgScore &&
  dolphinsAvgScore > 100 &&
  koalasAvgScore > 100
) {
  console.log(`Congrats to the Dolphins`);
} else {
  console.log(`Congrats to the Koalas`);
}
