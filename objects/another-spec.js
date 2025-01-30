import state from "./another-spec.json" assert { type: "json" };

const userGroups = state.user_groups;
console.log("🚀 ~ userGroups:", userGroups);

const mapOverUserGroups = Object.keys(userGroups).map((userGroup) => {
  return userGroups[userGroup];
});
