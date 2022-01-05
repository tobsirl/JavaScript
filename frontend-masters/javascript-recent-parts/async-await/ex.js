function getFile(file) {
  return new Promise(function (resolve) {
    fakeAjax(file, resolve);
  });
}

async function loadFiles(files) {
  // request all files concurrently
  const text1 = await getFile(files[0]);
  const text2 = await getFile(files[1]);
  const text3 = await getFile(files[2]);
  // print in order, sequentially
}

loadFiles(['file1', 'file2', 'file3']);

// **************************************

function fakeAjax(url, cb) {
  var fake_responses = {
    file1: 'The first text',
    file2: 'The middle text',
    file3: 'The last text',
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log('Requesting: ' + url);

  setTimeout(function () {
    cb(fake_responses[url]);
  }, randomDelay);
}
