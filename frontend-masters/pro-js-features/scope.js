// Learn the new let and const keywords
var globalScoped = 4;

function callMe(x) {
  if (x > 0) {
    let functionScoped = "Check me";
  }
  console.log(functionScoped);
}

callMe(23);
