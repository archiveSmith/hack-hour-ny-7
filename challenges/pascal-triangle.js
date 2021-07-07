/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  if (numRows <= 0) {
    return undefined;
  }

  let rowArr = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      rowArr.push([1]);
    } 
    else{
      let previousRow = rowArr[i - 1];
      let newRow = [];
      newRow.push(1);
      for (let j = 1; j < previousRow.length; j++) {
        newRow.push(previousRow[j - 1] + previousRow[j]);
      }
      newRow.push(1);
      rowArr.push(newRow);
    }
  }
  return rowArr;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
