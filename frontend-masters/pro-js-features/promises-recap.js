/*
Convert this callback example to the Promise pattern and handle it with then and catch
*/
function doInSeconds(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log("Setting the alert in 2 seconds");
doInSeconds(2, () => alert("2 seconds!"));
