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

 //1 2 3 4 5 6 7 8 9
 //7 4 1 8 5 2 9 6 3

function rotateGrid(grid, n) {
    if(!grid || !n) {
      return undefined;
    }

    //create new arr
    let newArr = grid.map(() => []);

    //populate new arr
    grid.reverse().forEach((innerArr,i) => {
      innerArr.forEach((element, j) => {
        newArr[j][i] = element;
      });
    });

    console.log(newArr);
}

function rotateGridInPlace(grid, n) {
  if(!grid || !n) {
    return undefined;
  }

  //loop defined as moving inside the square
  for(i = 0; i < Math.floor(n/2); i++) {
    //loop defined as moving along the current 'top' of the square
    for(j = i; j < n - i - 1; j++) {
      console.log('i',i,'j',j);
    }
  }
}

rotateGridInPlace([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 4);

module.exports = rotateGrid;
