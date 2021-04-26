/** Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.  */

const permutation = (stringOne, stringTwo = "") => {
  if (typeof stringOne !== "string") return;
  if (stringOne.length < 2) return stringOne;

  const storage = [];

  for (let i = 0; i < stringOne.length; i++) {
    let currChar = stringOne[i];

    if (stringOne.indexOf(currChar) !== i) continue;

    let remainingCharacters =
      stringOne.slice(0, i) + stringOne.slice(i + 1, stringOne.length);

    for (let perm of permutation(remainingCharacters)) {
      if (currChar + perm == stringTwo) return console.log("It Exist 🥳");
      storage.push(currChar + perm);
    }
  }

  return storage;
};
const answer = permutation("cat", "act");
