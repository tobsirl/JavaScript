import state from "./spec.json" assert { type: "json" };

const userGroup = "user_groups";
const segment = "age";
const nestedSegment = "18-24";

// console.log(state.user_groups.age);

// console.log(Object.keys(state[userGroup][segment]));
// console.log(Object.values(state[userGroup][segment]));
// console.log(Object.entries(state[userGroup][segment]));

const nestedUserGroups = Object.keys(state[userGroup][segment]);

const userGroups = nestedUserGroups.map((nestedUserGroupsKey) => {
  return {
    [nestedUserGroupsKey]: state[userGroup][segment][nestedUserGroupsKey],
  };
});

// console.log(userGroups);

// add an new segment to the user_groups
const newSegment = { new_segment: { new_group: 100 } };
const addNewSegment = (state[userGroup][segment]["18-24"].position_type = {
  ...state[userGroup][segment]["18-24"].position_type,
  ...newSegment,
});

console.log(addNewSegment);
