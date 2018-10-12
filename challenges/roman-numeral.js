/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
//  *
//  *      1     ->    I
//  *      4     ->    IV
//  *      5     ->    V
//  *      9     ->    IX
//  *      10    ->    X
//  *      40    ->    XL
//  *      50    ->    L
//  *      90    ->    XC
//  *      100   ->    C
//  *      400   ->    CD
//  *      500   ->    D
//  *      900   ->    CM
//  *      1000  ->    M
//  * 
//  */
// function romanNumeral(n) {
//   let romanStr = '';
//   let roman = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };
//   for (let i of Object.keys(roman)) {
//     let numDividedByValue = Math.floor(n / roman[i])
//     console.log(numDividedByValue)
//     n -= numDividedByValue * roman[i]
//     romanStr += i.repeat(numDividedByValue)
//   }
//   return romanStr
// }


// console.log(romanNumeral(2018))

// module.exports = romanNumeral;

//number 1
// var f = function g() {
//   return 23
// }
// typeof g()
// error g not defined

(function f(f) {
  return typeof f();
}(function () { return 1; })