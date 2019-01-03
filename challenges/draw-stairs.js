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
  for (let i = 1; i <= n; i++) {
    let string = '';
    for (let k = 0; k < n - i; k++) {
      string += ' ';
    }
    for (let p = 0; p < i; p++) {
      string += '*'
    }
    console.log(string);
  }
}

function drawStairs(n) {
  for (var i = 1; i <= n; i++) {
    var spaces = ' '.repeat(n - i);
    var splats = '*'.repeat(i);
    console.log(spaces + splats);
  }
}

/*
function drawStairs(n) {
  //establish string;
  //depict number of lines there is going to be
  //will start at one because stars depend on set of lines, if line is 0 no star.
  for(let i = 1; i < n; i++) {
    let string = '';
    //depict number of spaces
    //for first space if theres 10 lines you want 9 spaces plus one star
    for(let j = 0; j < n - i; j++) {
      let spaces = string += ' ';
    }
    //so we will make it so where each i, starting at 0 will be one asterisk.
    for(let k = 0; k < i; k++) {
      let stars = string += '*';
    }
    console.log(string)
  }
}
*/


module.exports = drawStairs;
