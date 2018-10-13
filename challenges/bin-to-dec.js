/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */
function binToDec(binary) {
  return (parseInt(binary, 2));
}
//ParseInt: 

// console.log(bin_to_dec('110011'));
// console.log(bin_to_dec('100'));

module.exports = binToDec;
//Get the last digit of the binary number, call this digit the currentDigit.  
// Make a variable, let's call it power.  Set the value to 0.
// Multiply the current digit with (2^power), store the result.
// Increment power by 1.
// Set the the currentDigit to the previous digit of the binary number.
// Repeat step 3 until all digits have been multiplied.
// Sum the result of step 3 to get the answer number