function testPromises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

const response = testPromises();
response
  .then((result, test) => {
    console.log("🚀 ~ result", result);
    test = "test";
    return [result, test];
  })
  .then((result) => {
    console.log("🚀 ~ result1", result[0]);
    console.log("🚀 ~ test", result[1]);
  });
