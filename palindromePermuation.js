function palPerm(string) {
  let hashCount = new Set();
  string.split("").map((word) => {
    if (hashCount.has(word)) {
      hashCount.delete(word);
    } else {
      hashCount.add(word);
    }
  });

  if (hashCount.size <= 1) {
    return console.log("Yes it is a palindrom 😀");
  } else {
    return console.log("No it's not 🙁");
  }
}

palPerm("lollipop");
