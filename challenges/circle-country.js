/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  //loop through each circle
  
  //if it surrounds either but not the other, count it
  let circleArr = x.map((x, index) => {
    return {
      x : x,
      y : y[index],
      r : r[index],
    };
  });

  let resultCount = 0;
  circleArr.forEach(circle => {
    //count circles that surround start or end, but not both
    if (
      (doesCircleSurroundPoint(circle.x, circle.y, circle.r, start_x, start_y) && !doesCircleSurroundPoint(circle.x, circle.y, circle.r, end_x, end_y)) 
      || 
      (!doesCircleSurroundPoint(circle.x, circle.y, circle.r, start_x, start_y) && doesCircleSurroundPoint(circle.x, circle.y, circle.r, end_x, end_y)
      )){
      resultCount++;
    }
  });

  return resultCount;
}

function doesCircleSurroundPoint(xCenter, yCenter, radius, xPoint, yPoint) {
  let yDiff = yCenter - yPoint;
  let xDiff = xCenter - xPoint;
  let distanceBetween = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2))
  return radius > distanceBetween ? true : false;
}

// let x = [3,3];
// let y = [3,3];
// let r = [3,5];
// let startX = 0;
// let startY = 10;
// let endX = 3;
// let endY = 3;

// console.log(circleCountry(x, y , r, startX, startY, endX, endY))

module.exports = circleCountry;
