/** String Rotation:Assumeyou have a method isSubstringwhich checks if oneword is a substring
of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").  */

function stringRotation(strOne, strTwo) {
  let lenOne = strOne.length;
  let lenTwo = strTwo.length;

  if (lenOne !== lenTwo || lenOne == 0 || lenTwo == 0) return false;

  for (let i = 0; i < strOne.length; i++) {
    let remaining = strOne.slice(i, lenOne) + strOne.slice(0, i);
    if (remaining == strTwo) return true;
  }

  return false;
}

let result = stringRotation("waterbottle", "aterbottlew");
console.log(result);
