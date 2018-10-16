/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function pow(el) {
  return Math.pow(2, el);
}

function binToDec(num) {
  let sum = 0;
  let cNum = num.split('');
  console.log(cNum);
  for (let i = cNum.length-1; i >= 0; i--) {
    // sum += pow([i]);
    console.log(i)
    if(cNum[i] === '1') {
      console.log(cNum[i], 'this is cNum')
      console.log(i, 'this i hit')
      sum += pow(i);
      console.log(sum, 'this is sum')
    }
  }
  return sum;
}

module.exports = binToDec;
