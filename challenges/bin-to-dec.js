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

function binToDec(binary) {
    let digArr = binary.split('').reverse();
    let multiplier = 1;
  
    return digArr.reduce((acc, itm, idx) => {
      if (itm === '1') {
        acc += multiplier;
      }
      multiplier *= 2;
      return acc;
    });
  }

module.exports = binToDec;
