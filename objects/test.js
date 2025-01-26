import state from "./test.json" assert { type: "json" };

const userGroups = state.user_groups;
console.log("🚀 ~ userGroups:", userGroups);
const segment = "gender";
const segmentKey = "male";
const nestedSegment = "position_type";
const nestedSegmentKey = "instagram_stream";

const nestUserGroup = Object.keys(
  userGroups[segment][segmentKey][nestedSegment][nestedSegmentKey]
);

console.log(nestUserGroup);
