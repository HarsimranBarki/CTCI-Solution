/** One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.*/

function oneAway(strOne, strTwo) {
  let hash = new Set();

  for (let s of strOne) {
    hash.add(s);
  }

  for (let s of strTwo) {
    if (hash.has(s)) hash.delete(s);
  }

  if (hash.size <= 1) return console.log("Yes");
}

oneAway("Palle", "Balle");
