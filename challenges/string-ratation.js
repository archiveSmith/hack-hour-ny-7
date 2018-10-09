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
  // READ s1 = "hello", s2 = "hello"
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  // READ s1 = "hello", s2 = "llohe"
  return isSubstring(s1, s2);
}

/* TASK LIST:
-create a function named "stringRotation" with parameters: string1, string2
  -split string2 into an array, and assign it to a variable called "splitString2"
  -declare a variable and assign it an empty array
  -iterate through the string1 parameter
    -iterate through the splitString2
      -if the current character in string1 parameter is equal to the current character in splitString2
    -end of iteration
  -end of splitString iteration
-end of stringRotation
*/

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};