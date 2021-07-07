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


function stringRotation(s1, s2) {
  //preliminary length check
 if (!s1 || !s2){
   return false;
 }
 if (s1.length !== s2.length){
   return false;
 }

 let length = s1.length //can use either string
 //rotate s1 length times and check each iteration if it matches s2. break and return true if so

 let rotatedString = s1;
 let matchString = s2;

 for(let i = 0; i < length; i++){
   rotatedString = rotatedString[rotatedString.length-1] + rotatedString.substring(0,rotatedString.length-1);

   console.log(rotatedString);
   if(rotatedString === matchString){
     return true;
   }
 }
 return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
