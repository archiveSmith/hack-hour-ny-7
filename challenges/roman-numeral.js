/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  let result = '';
  if ()
}

let possibilities = 
{1 : 'I',
4 : 'IV',
5 : 'V',
9 : 'IX',
10 : 'X',
40 : 'XL',
50 : 'L',
90 : 'XC',
100 : 'C',
400 : 'CD',
500 : 'D',
900 : 'CM',
1000 : 'M'
}
var keys = Object.keys(possibilities).sort((a,b) => b-a);

let arr = []
for (let i = 0; i < keys.length; i++) {
  let z = keys[i];
  let value = possibilities[keys[i]];
  let test = { z: value};
  // let test = { keys[0]: possibilities[keys[0]]}
  // console.log(test)
  arr.push(test)
}
console.log(arr)

// function romanNumeral(n) {
//   let result = '';
//   for (key x in possibilities) {
//     if (n >= ) {

//     }
//   }
// }


function romanNumeral(n) {
  let result = '';

  if (n >= 1000) {
    for (let i=0; i<Math.floor(n/1000); i++) {
      result += 'M'
    }
    n = n%1000; console.log(n, 'this is n')
  }
  if (n >= 900) {
    for (let i=0; i<Math.floor(n/1000); i++) {
      result += 'M'
    }
    n = n%1000; console.log(n, 'this is n')
  }
  if (n >= 500) {
    for (let i=0; i<Math.floor(n/1000); i++) {
      result += 'M'
    }
    n = n%1000; console.log(n, 'this is n')
  }
  if (n >= 10) {
    for (let i=0; i<Math.floor(n/10); i++) {
      result += 'X'
    }
    n = n%10; console.log(n, 'this is n')
  }
  if (n >= 5) {
    for (let i=0; i<Math.floor(n/5); i++) {
      result += 'V'
    }
    n = n%5; console.log(n, 'this is n')
  }
  return result;
  
}
console.log(romanNumeral(2015)) //MMXV

module.exports = romanNumeral;