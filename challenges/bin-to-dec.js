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

function binToDec(binary) {
  const arr = binary.toString().split('')
  const len = arr.length;

  return arr.reduce((acc, curr, i) => acc += curr * Math.pow(2, len - 1 - i), 0);
}

console.log(binToDec(1101))

function titleToNumber(s) {
  const store = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26}
  let output = 0;
  let len = s.length;
  const arr = s.split('')
  for (let i = 0; i < len; i++) {
      output += store[arr[i]] * Math.pow(26, len - 1 - i)
  }
  return output;
};

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

console.log(decToBin(9))

// console.log(binToDec(101100101));

// console.log(decToBinEasy(357));

module.exports = binToDec;
