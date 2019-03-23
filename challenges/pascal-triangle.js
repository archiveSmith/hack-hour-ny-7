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
  if (numRows < 0) return undefined;
  if (!numRows) return [];
  // initialize triangle array with 1 row array
  const output = [[1]];
  for (let i = 0; i < numRows - 1; i++) {
    // initialize each new row array with 1
    const row = [1]
    // start @ 1 because each previous row's first value is always 1
    // iterate over the previous row, adding the current value and adjacent value
    for (let j = 1; j < output[i].length; j++) {
      row[j] = output[i][j] + output[i][j-1]
    }
    // end each row with 1
    row.push(1)
    // push the new row array to the triangle array
    output.push(row);
  }
  return output;
}



console.log(pascalTriangle(6));

module.exports = pascalTriangle;
