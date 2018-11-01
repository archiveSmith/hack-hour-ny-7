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
    let result = 0;
    let toBeAdded = 1;
    binary.split('').reverse().forEach(char => {
        result += char == 1 ? toBeAdded : 0;
        toBeAdded <<= 1;
    });
    return result;
}

function decToBin(decimal){
    let binString = "";
    let currentExponentValue = 1073741824;
    for(let i = 30; i >= 0 ; i--){
        if (decimal >= currentExponentValue){
            decimal -= currentExponentValue;
            binString += '1';
        }
        else {
            binString += '0';
        }
        currentExponentValue >>= 1;
    }
    return binString;
}

function decToHex(decimal){
    let hexString = "";

    let maxHexBase = 0;
    while (decimal / (16**maxHexBase) >= 1){
        maxHexBase++;
    }
    //remove one
    maxHexBase--;
    console.log(maxHexBase);

    for (let i = maxHexBase; i >= 0; i--){
        let value = Math.floor(decimal / (16**i));

        decimal -= value * (16**i);

        //value convert 10-16 to a-f
        switch (value) {
            case 10: {
                value = 'a';
                break;
            }
            case 11: {
                value = 'b';
                break;
            }
            case 12: {
                value = 'c';
                break;
            }
            case 13: {
                value = 'd';
                break;
            }
            case 14: {
                value = 'e';
                break;
            }
            case 15: {
                value = 'f';
                break;
            }
            default : {
                break;
            }
        }
        
        hexString += value;
    }

    return '0x'+hexString;
}

console.log(decToHex(100000000000000000));


module.exports = binToDec;
