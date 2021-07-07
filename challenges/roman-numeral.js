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
console.log(romanNumeral(1999));

function romanNumeral(n) {
  let romanMapping = [
    {1000 : "M"},
    {900 : 'CM'},
    {500 : 'D'},
    {400 : 'CD'},
    {100 : 'C'},
    {90 : 'XC'},
    {50 : 'L'},
    {40 : 'XL'},
    {10 : 'X'},
    {9 : 'IX'},
    {5 : 'V'},
    {4 : 'IV'},
    {1 : 'I'},
  ];

  let result = '';
  romanMapping.forEach(mapping => {
    let decimal = Object.keys(mapping)[0];
    let roman = mapping[Object.keys(mapping)[0]];
    
    let numeralCount = Math.floor(n / decimal);
    n -= numeralCount * decimal;

    result += roman.repeat(numeralCount);
  })
  return result;
  
}
module.exports = romanNumeral;
