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

/* TASK LIST:
-create a function named "drawStairs" with parameter: number
	-iterate through 0 to the number parameter
		-log an asterisks to the console
	-end of iteration
-end of "drawStairs" 
*/	

function drawStairs(n) {
	for (let i = 0; i < n; i++) {
		console.log("*");
	}
}


module.exports = drawStairs;
