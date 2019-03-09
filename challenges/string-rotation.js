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

console.log(isSubstring('hello', 'helo'));

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) { return false }

  let firstChar = s1[0];
  let s1Index = 0;
  let tester = false;
  let s2Index;
  for (let i=0; i<s2.length; i++) {

    if (s2[i] === firstChar) {
      s2Index = i;
      let j = i;
      tester = true;
      while (j < s2.length-1) {
        if (s2[j] === s1[s1Index]) {
          j++;
          s1Index++;
        } else { tester = false }
      }
    }
  }
  if (tester === true && isSubstring(s1, s2.slice(0, s2Index)) ) {
    return true;
  }
  return false;
}

function stringRotation(s1, s2) {
  let stringToCheck = s1 + s1;
  return (s1.length === s2.length) && isSubstring(stringToCheck, s2);
}


console.log(stringRotation('hello', 'llohe'));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
