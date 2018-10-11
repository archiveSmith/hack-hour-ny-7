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
  let num = n;
  let output = [];
  if (num >= 1000) {
    let m = Math.floor(num / 1000);
    for (let i = 0; i < m; i++) {
      output.push('M')
    }
    num = Number(num.toString().split('').slice(-3).join(''));
  }

  if (num >= 500) {
    let d = Math.floor(num / 100);
    if (d === 9) { 
      output.push('CM');
      num = Number(num.toString().split('').slice(-2).join(''));
    }
    else {
      output.push('D')
      num = num - 500;
    }
  }

  if (num >= 100) {
    let c = Math.floor(num / 100);
    if (c === 4) {output.push('CD')}
    else {
      for (let i = 0; i < c; i++) {
        output.push('C');
      }
    }
    num = Number(num.toString().split('').slice(-2).join(''));
  }

  if (num >= 50) {
    let l = Math.floor(num / 10);
    if (l === 9) { 
      output.push('XC')
      num = Number(num.toString().split('').slice(-1).join(''));
    }
    else { 
      output.push('L') 
      num = num - 50;
    };
  }

  if (num >=10) {
    let x = Math.floor(num / 10);
    if (x === 4) { output.push('XL') }
    else {
      for (let i = 0; i < x; i++) {
        output.push('X');
      }
    }
    num = Number(num.toString().split('').slice(-1).join(''));
  }

  if (num >= 100) {
    let c = Math.floor(num / 100);
    if (c === 4) {output.push('CD')}
    else {
      for (let i = 0; i < c; i++) {
        output.push('C');
      }
    }
    num = Number(num.toString().split('').slice(-2).join(''));
  }

  if (num >= 5) {
    if (num === 9) {
      output.push('IX')
    } else {
      output.push('V')
      num = num - 5;
      for (let i = 0; i < num; i++) {
        output.push('I')
      }
    }
  }
  return output.join('');
}

console.log(romanNumeral(997));

module.exports = romanNumeral;
