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
    let romanNumStr = "";
    while (n>=1) {
       switch (true) {
        case n>=1000:
            romanNumStr += "M";
            n -= 1000;
            break;
        case n>=900:
            romanNumStr += "CM";
            n -= 900;
            break;
        case n>=500:
            romanNumStr += "D";
            n -= 500;
            break;
        case n>=400:
            romanNumStr += "CD";
            n -= 400;
            break;
        case n>=100:
            romanNumStr += "C";
            n -= 100;
            break;
        case n>=90:
            romanNumStr += "XC";
            n -= 90;
            break;
        case n>=50:
            romanNumStr += "L";
            n -= 50;
            break;
        case n>=40:
            romanNumStr += "XL";
            n -= 40;
            break;
        case n>=10:
            romanNumStr += "X";
            n -= 10;
            break;
        case n>=9:
            romanNumStr += "IX";
            n -= 9;
            break;
        case n>=5:
            romanNumStr += "V";
            n -= 5;
            break;
        case n>=4:
            romanNumStr += "IV";
            n -= 4;
            break;
        case n>=1:
            romanNumStr += "I";
            n -= 1;
            break;
       }
    }
    return romanNumStr;
}

console.log(romanNumeral(''))
module.exports = romanNumeral;
