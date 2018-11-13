// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

console.log('Hi from count-twos.js');

function countTwos(num) {
  let count = 0;
  let numArr = num.toString().split('');
  let position = numArr.length-1;

  for (let i = position; i >= 0; i-=1) {
    let place = position;
    let digit = Number.parseInt(numArr[i]);
    if (place === 1) {
       if (digit >= 2) {
         count += 1;
       }
       else {
         count += 0;
       }
    }
    else {

    }

  }
  return count;
}

console.log(countTwos(13));

module.exports = countTwos;
