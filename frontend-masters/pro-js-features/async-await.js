/*
Convert the start function into async/await syntax
*/
function doInSeconds(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success"), seconds * 1000);
  });
}
console.log("Setting the alert in 2 seconds");

async function start() {
  const value = await doInSeconds(2);
  // .then((value) => alert(value))
  // .catch((error) => alert(error));
  console.log(value);
}

start();
