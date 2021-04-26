/** Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?  */

const isUnique = (str) => {
  for (i in str) {
    for (j in str) {
      if (i !== j && str[i] == str[j]) {
        return console.log("No Unique Characters");
      }
    }
  }
  return console.log("Unique Characters");
};

isUnique("God");
