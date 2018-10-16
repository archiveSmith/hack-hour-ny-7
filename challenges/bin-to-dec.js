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
  let value = 1;
  let output = 0;
  let arr = binary.toString().split('');
  for (let i = arr.length - 1; i >=0; i--) {
    if (arr[i] == 1) {
      output += value;
      value = value * 2;
    } else {
      value = value * 2;
    }
  }
  return output;
}

function decToBin(decimal) {
  let dec = decimal;
  let bin = [];
  while (dec > 0) {
    bin.unshift(dec%2);
    dec = Math.floor(dec/2);
  }
  return Number(bin.join(''));
}

function decToBinEasy(decimal) {
  return Number(decimal.toString(2));
}

console.log(decToBin(357))

console.log(binToDec(101100101));

console.log(decToBinEasy(357));

module.exports = binToDec;
