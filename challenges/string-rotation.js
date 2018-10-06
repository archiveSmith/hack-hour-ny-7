/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

/* It's very early and I over engineered this but should work, no? */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let subStringFunc = isSubstring(s1, s2);
  let s1Arr = s1.split(' ');
  let s2Arr = s2.split(' ');
  let s1First = s1[0];

  if (s2 === s1) {
    return true;
  }

  if (s1.length === s2.length) {
    let rotated = [];

    for (let i = 0; i < s2.length; i++) {
      if (s2[i] === s1First) {
        for (let z = i; z < s2.length; z++) {
          rotated.push(s2[z]);
          if (z === s2.length - 1) {
            for (let x = 0; x < s2.length - i + 1; x++) {
              rotated.push(s2[x]);
            }
          }
        }
      }
    }
    let rotatedString = rotated.join('')
    if (s1 === rotatedString) {
      return true;
    } 
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
