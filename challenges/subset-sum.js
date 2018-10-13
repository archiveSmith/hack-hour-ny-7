/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  const perms = permutations(array)

  for (let i = 0; i < perms.length; i++) {
    console.log(perms[i]);

    let sum = 0;
    for (let j = 0; j < perms[i].length; j++) {
      sum += perms[i][j];
      if (sum === target) {
        return true;
      }
    }
  }
  return false;
}

function permutations(xs) {
  let ret=[];for(let i=0;i<xs.length;i=i+1){let rest=permutations(xs.slice(0,i).concat(xs.slice(i+1)));if(!rest.length){ret.push([xs[i]])}else{for(let j=0;j<rest.length;j=j+1){ret.push([xs[i]].concat(rest[j]))}}}return ret
};

module.exports = subsetSum;
