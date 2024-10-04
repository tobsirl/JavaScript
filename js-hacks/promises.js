// function testPromises() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise resolved");
//     }, 1000);
//   }).catch((error) => {
//     console.log("🚀 ~ error", error);
//     reject(error);
//   });
// }

// const response = testPromises();
// response
//   .then((result, test) => {
//     console.log("🚀 ~ result", result);
//     test = "test";
//     return [result, test];
//   })
//   .then((result) => {
//     console.log("🚀 ~ result1", result[0]);
//     console.log("🚀 ~ test", result[1]);
//   });

function fetchSWAPI() {
  return fetch("https://swapi.dev/api/people/1")
    .then((response) => response.json())
    .then((data) => {
      return fetch("https://swapi.dev/api/planets/1")
        .then((response) => response.json())
        .then((planet) => {
          return { ...data, ...planet };
        });
    });
}

fetchSWAPI().then(({ data, planet }) => {
  console.log(
    data.name,
    data.height,
    data.mass,
    data.hair_color,
    data.skin_color,
    data.eye_color
  );
  console.log("🚀 ~ response", planet.climate);
});
