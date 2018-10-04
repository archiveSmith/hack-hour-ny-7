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

function drawStairs(n, originalN = n) {
    if(n === 0) return;
    let str = ''
    for(let i = 0; i <= n; i++) {
        str += ' '
    }
    for(let i = 0; i <= originalN - n; i++) {
        str += '*';
    }
    console.log(str);
    return drawStairs(n-1 , originalN)
}


module.exports = drawStairs;
