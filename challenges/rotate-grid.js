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
  let sideLength = (Math.pow(n,2) - Math.pow(n-2,2))/4;
  
  for(let i = 0; i < sideLength; i++) {
    let topLeft = grid[0][0];
    let topRight = grid[0][sideLength - 1];
    let bottomRight = grid[sideLength - 1][sideLength - 1];
    let bottomLeft = grid[sideLength - 1][0];
    let top = topLeft;
    topLeft = bottomLeft;
    bottomLeft = bottomRight;
    bottomRight = topRight;
    topRight = top;
  }
  
}

module.exports = rotateGrid;
