import state from "./another-spec.json" assert { type: "json" };

const userGroups = state.user_groups.gender;

Object.keys(userGroups).forEach((gender) => {
  console.log(`Gender: ${gender}`);
  const devicePlatforms = userGroups[gender].device_platform;
  Object.keys(devicePlatforms).forEach((platform) => {
    console.log(
      `  Platform: ${platform}, Version: ${devicePlatforms[platform]}`
    );
  });
});
