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

function binToDec(binary, sum = 0, num = 1) {
    if(num === 1) binary = binary.split('').reverse();
    if(!binary[0]) return sum;
    sum += binary[0] * num;
    binary.shift();
    return binToDec(binary, sum, num*2)
}

function decToBin(decimal, binary = '', num = 1) {
    while(decimal >= num*2) {
        num *= 2;
    }
    if(decimal >= num) {
        binary += '1'
        decimal -= num;
    } else {
        binary += '0';
    }
    if(num === 1) return binary;
    return decToBin(decimal, binary, num/2)
}

module.exports = binToDec;
