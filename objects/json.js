import state from "./spec.json" assert { type: "json" };

const userGroup = "user_groups";
const segment = "age";

// console.log(state.user_groups.age);

console.log(Object.keys(state[userGroup][segment]));
