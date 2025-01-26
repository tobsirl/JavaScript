import state from "./spec.json" assert { type: "json" };

const userGroup = "user_groups";
const segment = "age";
const nestedSegment = "18-24";
const nestedSegmentKey = "position_type";

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
const newSegment = { [nestedSegmentKey]: { new_group: 100 } };
const addNewSegment = (state[userGroup][segment][nestedSegment][
  nestedSegmentKey
] = {
  ...state[userGroup][segment][nestedSegment][nestedSegmentKey],
  ...newSegment,
});

console.log(addNewSegment);
