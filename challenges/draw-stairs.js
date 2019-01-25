/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    let spaces = n - 1;
    let stars = '*';
    for (let i = 0; i < n; i++) {
        let output = '';
        for (let i = spaces; i > 0; i--) {
        output += ' ';
        }
        console.log(output += stars);
        spaces--;
        stars += '*';
    }
}

function drawStairs2(n) {
    for (let i = 1; i <= n; i++) {
      const spaces = ' '.repeat(n - i);
      const stars = '*'.repeat(i);
      console.log(spaces + stars);
    }
  }

console.log(drawStairs2(7))

module.exports = drawStairs;
