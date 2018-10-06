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
  return s1.indexOf(s2) >= 0; //s2 is found otherwise would be -1
}

// function stringRotation(s1, s2) {
//   if (isSubstring(s1, s2) && s1.length === s2.length) {
//     return true;
//   }

//   let ind = s2.indexOf(s1[0]); //returns 3
//   let str = "";

//   for (let i = ind; i < s2.length; i++) {
//     str += s2[i];
//   }
//   for (let i = 0; i < ind; i++) {
//     str += s2[i];
//   }
//   return str === s1;
// }

function stringRotation(s1, s2) {
  //llohe
  //llohellohe
  let str = s2.concat(s2);
  return isSubstring(str, s1);
}
module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
