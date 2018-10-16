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

let romanNumbers = {
"I": 1,
"II": 2,
"III": 3,
"V": 5,
"X": 10,
"L": 50,
"C": 100,
"D": 500,
"M": 1000
};

function romanNumeral(n) {
  let thousands = Math.floor(n/1000);
  let hundredsPlace = n % romanNumbers['M'];
  let fiveHundreds = Math.floor(hundredsPlace /romanNumbers['D']);
  let hundreds = hundredsPlace % romanNumbers['D'];

  console.log(thousands, '#thousands')
  console.log(hundredsPlace, 'hundreds place')
  console.log(fiveHundreds, '#ofFiveHundreds')
  console.log(hundreds, '#ofHundreds')
}

romanNumeral(2776);



/*
Jonathans solution

function romanNumeral(n) {
  const map = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'],
    [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];

  let value = '';
  for (let idx = 0; n > 0 && idx < map.length; idx++) {
    while (n >= map[idx][0]) {
      value += map[idx][1];
      n -= map[idx][0];
    }
  }
  return value;
}

*/
















module.exports = romanNumeral;
