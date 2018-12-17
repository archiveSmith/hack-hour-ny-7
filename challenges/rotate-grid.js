/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  let result = [];
  for (i=0; i<n; i++) { //0, 1, 2
    let arr = [];
    for (let j=n-1; j>=0; j--) { //2, 1, 0
      arr.push(grid[j][i]);
    }
    result.push(arr);
    // console.log(result)
  }
  return result;
}

//*********************************fellow solution *********************************
// O(n ^ 2) time, O(n ^ 2) space
function rotateGrid(grid, n) {
  const newGrid = [];

  for (let col = 0; col < n; col++) {
    const newRow = [];

    for (let row = n - 1; row >= 0; row--) {
      newRow.push(grid[row][col]);
    }

    newGrid.push(newRow);
  }
}

// O(n ^ 2) time, O(1) space
function rotateGrid(grid, n) {
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let first = i;
    const last = n - 1 - i;

    for (let j = first; j < last; j++) {
      const adjust = j - first;
      const top = grid[first][j];

      // left -> top
      grid[first][j] = grid[last - adjust][first];

      // bottom -> left
      grid[last - adjust][first] = grid[last][last - adjust];

      // right -> bottom
      grid[last][last - adjust] = grid[j][last];

      // top -> right
      grid[j][last] = top;
    }
  }
  return grid;
}

module.exports = rotateGrid;
