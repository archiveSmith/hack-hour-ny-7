/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){
  let xMax = x.reduce((acc, cur) => Math.max(acc, cur));
  let xMin = x.reduce((acc, cur) => Math.min(acc, cur));
  let yMax = y.reduce((acc, cur) => Math.max(acc, cur));
  let yMin = y.reduce((acc, cur) => Math.min(acc, cur));

  let pairArr = x.map((num, index) => {
    return {
      x : num,
      y : y[index],
    }
  });

  let coordinateCache = {};
  let foundCoordinates = [];

  pairArr.forEach(coord => {
    //right arrows
    for(let x = coord.x + 1; x <= xMax; x++){
      if (!coordinateCache[[x, coord.y]]) {
        coordinateCache[[x, coord.y]] = {
          right : true,
          up : false,
          left : false,
          down : false,
        }
      }
      else if (coordinateCache[[x, coord.y]]) {
        coordinateCache[[x, coord.y]].right = true;
        if (coordinateCache[[x, coord.y]].right && coordinateCache[[x, coord.y]].up && coordinateCache[[x, coord.y]].left && coordinateCache[[x, coord.y]].down && !coordinateCache[[x, coord.y]].added) {
          //so no coord gets added multiple times
          coordinateCache[[x, coord.y]].added = true;
          foundCoordinates.push(coordinateCache[[x, coord.y]]);
        }
      }
    }
    //left arrows
    for(let x = coord.x - 1; x >= xMin; x--){
      if (!coordinateCache[[x, coord.y]]) {
        coordinateCache[[x, coord.y]] = {
          right : false,
          up : false,
          left : true,
          down : false,
        }
      }
      else if (coordinateCache[[x, coord.y]]) {
        coordinateCache[[x, coord.y]].left = true;
        if (coordinateCache[[x, coord.y]].right && coordinateCache[[x, coord.y]].up && coordinateCache[[x, coord.y]].left && coordinateCache[[x, coord.y]].down && !coordinateCache[[x, coord.y]].added) {
          //so no coord gets added multiple times
          coordinateCache[[x, coord.y]].added = true;
          foundCoordinates.push(coordinateCache[[x, coord.y]]);
        }
      }
    }
    //up arrows
    for(let y = coord.y + 1; y <= yMax; y++){
      if (!coordinateCache[[coord.x, y]]) {
        coordinateCache[[coord.x, y]] = {
          right : false,
          up : true,
          left : false,
          down : false,
        }
      }
      else if (coordinateCache[[coord.x, y]]) {
        coordinateCache[[coord.x, y]].up = true;
        if (coordinateCache[[coord.x, y]].right && coordinateCache[[coord.x, y]].up && coordinateCache[[coord.x, y]].left && coordinateCache[[coord.x, y]].down && !coordinateCache[[coord.x, y]].added) {
          //so no coord gets added multiple times
          coordinateCache[[coord.x, y]].added = true;
          foundCoordinates.push(coordinateCache[[coord.x, y]]);
        }
      }
    }
    //down arrows
    for(let y = coord.y - 1; y >= yMin; y--){
      if (!coordinateCache[[coord.x, y]]) {
        coordinateCache[[coord.x, y]] = {
          right : false,
          up : false,
          left : false,
          down : true,
        }
      }
      else if (coordinateCache[[coord.x, y]]) {
        coordinateCache[[coord.x, y]].down = true;
        if (coordinateCache[[coord.x, y]].right && coordinateCache[[coord.x, y]].up && coordinateCache[[coord.x, y]].left && coordinateCache[[coord.x, y]].down && !coordinateCache[[coord.x, y]].added) {
          //so no coord gets added multiple times
          coordinateCache[[coord.x, y]].added = true;
          foundCoordinates.push(coordinateCache[[coord.x, y]]);
        }
      }
    }
  });

  return foundCoordinates.length;
}

console.log(newIntersections([2.1, 3.1, 2.1, 1.1] , [1.1, 2.1, 3.1, 2.1]));

// 2, 3, 2, 1
// 1, 2, 3, 2

module.exports = newIntersections;
