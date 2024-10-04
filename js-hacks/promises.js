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
      console.log("🚀 ~ data", data);
      return data;
    });
}

fetchSWAPI().then(({ name, a, b, c, d, f }) => {
  console.log({ name, a, b, c, d, f });
});
