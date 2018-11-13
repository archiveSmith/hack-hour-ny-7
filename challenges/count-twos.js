// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  return num.toString().split('').reverse().map((digit, index, arr) => {
    let place = index + 1;
    if (place === 1) {
      return digit >= 2 ? 1 : 0;
    } else {
      let logTerm = digit * index * Math.pow(10, index - 1);
      let greaterThanTwoTerm = digit > 2 ? Math.pow(10, index) : 0;
      let EqualToTwoTerm = digit == 2 ? Number.parseInt(arr[index - 1]) + 1 : 0;
      
      return logTerm + greaterThanTwoTerm + EqualToTwoTerm;
    }
  })
  .reduce((acc, cur) => {
    return acc + cur;
  });
}

console.log(countTwos(11420));

module.exports = countTwos;
