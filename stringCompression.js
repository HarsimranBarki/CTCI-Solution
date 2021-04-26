function stringCompression(string) {
  let hash = {};

  for (const iterator of string) {
    if (hash.hasOwnProperty(iterator)) {
      hash[iterator]++;
    } else {
      hash[iterator] = 1;
    }
  }

  let outputStr = "";

  Object.entries(hash).forEach(([key, value]) => {
    outputStr += key + value;
  });

  return console.log(outputStr);
}

stringCompression("aabbccds");
