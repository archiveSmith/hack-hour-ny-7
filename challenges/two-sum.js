/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

}


//---------Ryans Solution ---------
/*
Challenge: Write a function that takes a number as an argument, n. The function will return thenumber of 2's encoutered when counting from 1 to n
*/

/*
function bruteForce(n){
  let count = 0;
  for (let i = 2; i <= n; i += 1) {
    const string = String(i);
    for (let j = 0; j < string.length; j += 1) {
      if (string[j] === '2') count += 1;
    }
  }
  return count;
}

function bruteRegex(n){
  let count = 0;
  for (let i = 2; i < n; i += 1) {
    const string = String(i);
    string.replace(/2/g, two => count += 1)
  }
  return count;
}

//method 2 - optimized linear approach

function countTwos(num) {
    const numString = num.toString();
    let totalTwos = 0;
    let digitsPlace = numString.length;

    for (let i = 0; i < numString.length; i++) {
      // STRIP NUM STRING TO GET DIGIT + PLACE IN STRING //
      // get current digit, ex: 1 of 152
      let currentDigit = Number(numString[i]);

      // get base, ex: 100 = 1 in 152
      let baseDigit = currentDigit * Math.pow(10, digitsPlace - 1);

      // Count the number of twos in the base value
      // ex: 100 -> 100 has 20 twos,
      // ex: 50 -> base is 1 * current number (5) -> 5
      const baseCountTwos = currentDigit * (digitsPlace - 1) * 10 ** (digitsPlace - 2);

      // Add baseCountTwos to totalTwos counter.
      totalTwos += baseCountTwos;

      // Store remaining: 152 - 100 = 52
      const remaining = num - baseDigit;
      console.log({currentDigit, baseDigit, baseCountTwos, totalTwos, remaining})

      // CHECK VALUE OF CURRENT DIGIT, ADJUST ACCORDINGLY //
      // if currentDigit is 2, get total twos in base and account for first digit
      // ex1: 2 of 152 === 1... so, base of 0 + 1 two that is remaining between between 1 - 9.
      // ex2: 2 of 121 === 2 (12, 20), so base of 2 + 1 two that is remaining between 1 - 9
      if (currentDigit === 2) totalTwos += (remaining + 1);

      // if currentDigit is greater than 2, take base + number of twos in digitsPlace
      // First, take base twos: 50 -> (2, 12, 22, 32, 42) = 5 (calculate above)
      // Next, Account for missing twos in digits place: 20 - 29 = 1
      if (currentDigit > 2) totalTwos += Math.pow(10, digitsPlace - 1);

      //console.log('Input:', num, '|', 'baseDigit', baseDigit, ',', 'currentDigit:', currentDigit, '->', 'total twos in base:', (digitsPlace - 1) * 10 ** (digitsPlace - 2), '*', 'currentDigit:', currentDigit, '=', 'baseCountTwos', baseCountTwos);
      // reduce num to next digits place 152 becomes 52, 52 become 2
      num = remaining;

      // update digits place: 152 -> 152

      digitsPlace--;
    }
    return totalTwos;
  }

*/

/*
Jasons solution

function countTwos(num) {
  return num.toString().split('').reverse().map((digit, index, arr) => {
    let place = index + 1;
    if (place === 1) {
      return digit >= 2 ? 1 : 0;
    } else {

      let logTerm = digit * index * Math.pow(10, index - 1);
      let greaterThanTwoTerm = digit > 2 ? Math.pow(10, index) : 0;
      let EqualToTwoTerm = digit == 2 ? Number.parseInt(arr[index - 1]) * Math.pow(10, (index-1)) + (Number.parseInt(arr[index - 1]) == 0 ? 1 : 0) : 0;

      return logTerm + greaterThanTwoTerm + EqualToTwoTerm;
    }
  })
  .reduce((acc, cur) => {
    return acc + cur;
  });
}
*/



module.exports = twoSum;
