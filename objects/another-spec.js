import state from "./spec.json" assert { type: "json" };

const userGroups = state.user_groups;

Object.keys(userGroups).forEach((groupKey) => {
  console.log(`Group: ${groupKey}`);
  const group = userGroups[groupKey];
  Object.keys(group).forEach((subGroupKey) => {
    console.log(`  SubGroup: ${subGroupKey}`);
    const subGroup = group[subGroupKey];
    Object.keys(subGroup).forEach((typeKey) => {
      console.log(`    Type: ${typeKey}`);
      const type = subGroup[typeKey];
      Object.keys(type).forEach((itemKey) => {
        console.log(`      ${itemKey}: ${type[itemKey]}`);
      });
    });
  });
});
