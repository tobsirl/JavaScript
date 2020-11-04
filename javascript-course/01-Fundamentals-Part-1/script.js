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

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${markBMI.toFixed(
      2
    )}) is higher then John's (${johnBMI.toFixed(2)})`
  );
} else {
  console.log(
    `John's BMI (${johnBMI.toFixed(
      2
    )}) is higher then Mark's (${markBMI.toFixed(2)})`
  );
}

console.log();
