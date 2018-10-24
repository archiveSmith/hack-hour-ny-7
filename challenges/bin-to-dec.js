/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	console.log(binToDec('0')   // -> 0
 * 	console.log(binToDec('11')  // -> 3
 * 	console.log(binToDec('100') // -> 4
 * 	console.log(binToDec('101') // -> 5
 *  console.log(binToDec('0101') // -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */
function binToDec(binary) {
    const binConverter = {
        8: 256,
        7: 128,
        6: 64,
        5: 32,
        4: 16,
        3: 8,
        2: 4,
        1: 2,
        0: 1
    }
    let len = binary.length;
    let binStr = binary.split("");
    let totalDec = 0;
    for (let i = 0; i < len; i++) {
        if (binStr[i] === "1") {
            totalDec += binConverter[len - 1 - i]
        }
    }
    return totalDec;

}

console.log(binToDec('0')); // -> 0
console.log(binToDec('11')); // -> 3
console.log(binToDec('100')); // -> 4
console.log(binToDec('101')); // -> 5
console.log(binToDec('0101')); // -> 5

module.exports = binToDec;