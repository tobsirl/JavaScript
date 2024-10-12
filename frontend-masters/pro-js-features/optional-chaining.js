/*
Use the optional chaining operator ?. to safely access 
the nested property
*/
const users = [
  { name: "John", address: { city: "New York" } },
  { name: "Mary" },
  { name: "Sophie", address: { country: "Singapore" } },
];
for (let user of users) {
  const city = user?.address?.city?.toUpperCase();
  console.log(city ?? `No city defined for ${user.name}`);
}
