function getById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Got ${id}`);
      resolve(id);
    }, 1000);
  });
}

const ids = [10, 20, 30];

(async function () {
  for (const id of ids) {
    await getById(id);
  }
})();
