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

function countStairs(n) {
  //this is essentially fibonacci...because the answer when there are 3 stairs is equal to answer when there are 2 stairs + 1
  let current = 0;
  let after = 1;
  //n+ 1 to account for the offset
  for (let i = 0; i < n + 1; i++) {
    let next = current;
    current = after;
    after = next + current;
  }
  return current;
}

console.log(countStairs(8));

module.exports = countStairs;
