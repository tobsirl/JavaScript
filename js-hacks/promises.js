function testPromises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}

const test = testPromises();
test
  .then((result, test) => {
    console.log("🚀 ~ result", result);
    test = "test";
    return [result, test];
  })
  .then((result) => {
    console.log("🚀 ~ result1", result.result);
    console.log("🚀 ~ test", result.test);
  });
