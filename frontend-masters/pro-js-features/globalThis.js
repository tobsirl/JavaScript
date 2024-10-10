/*
Change the following code to use globalThis
*/
window.scrollX = 10;
global.setTimeout(() => {
  console.log("Hey"), 3000;
});
self.addEventListener("fetch", () => {});
