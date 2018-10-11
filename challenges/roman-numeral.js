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
    let digitToString = n.toString();
    let digitArr = digitToString.split('');
    let numeralCombos = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
      "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
      "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let numeralString = '';
    let i = 3;
    while (i--) {
      console.log('numeralString', numeralString)
      console.log('numeralCombos', numeralCombos)
      console.log('digitArr', digitArr)
      
      numeralString = (numeralCombos[+digitArr.pop() + (i * 10)] || "") + numeralString;
    }
    return Array(+digitArr.join("") + 1).join("M") + numeralString;
  }

}

module.exports = romanNumeral;
