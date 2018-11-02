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
    if (!n || n === 0 || n > 100) { return false; }
    let stairs = '';

    for (let i = 1; i <= n; i++) {

        for (let j = 0; j < n; j++) {
            if(j < n - i){
                stairs += ' ';
            }else{
                stairs += '*';
            }
        }

        if (i !== n) {
            stairs += '\n';
        }
    }

    return stairs;
}

// console.log(drawStairs(8));

module.exports = drawStairs;
