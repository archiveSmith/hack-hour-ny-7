/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

/*we know this is a permuation, a factorial type of algorithm question. because we start getting less and less combinations to work with as we recursively run our algoritm. We can use the fibonacci sequence solution to solve this.
We know n-1 + n-2 will give us all sequences.
So as we go down, 5-1 + 5-2 we get 4 + 3, until we meet our base case, return 2 if 2 and return 1 if 1. where 3-1 = 2, 3-2 = 1, we return 4,
*/

function countStairs(n) {
  if(n <= 1) {
    return 1;
  }
  if(n <= 2) {
    return 2;
  }
  return countStairs(n-1) + countStairs(n-2);
}

function countStairs(stairs){
  var count = 0;
  var start = 0;
  function find(start){
    if(start === stairs){
      count += 1
    }
    else if(start > stairs)
      return null
    else{
      return find(start + 2) || find(start + 1)
    }
  }
  find(start);
  return count;
}

console.log(countStairs(5));

module.exports = countStairs;













