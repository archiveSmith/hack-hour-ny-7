/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {

  let mean = Math.floor(array.reduce((acc, cv) => {return acc+=cv})/array.length);
  let mode;
  
  let obj = {}
  let maxcount = 0; //jonathan's solution:
  array.forEach((x) => {
    if (obj[x]) {
      obj[x]++;
      if (obj[x] > maxcount) maxount = x; //jonathan's solution:
    } else {
      obj[x]= 1;
    } 
  })

  let max = Math.max.apply(null, Object.values(obj)); 

  let modes = [];//Jonathan's solution

	for (let x in obj) {
    if (obj[x] === max) {
      mode = parseInt(x);
      modes.push(mode)//Jonathan's solution
    }
  }

  let mode = Math.max.apply(null, modes); //Jonathan's solution
  console.log('mode: ', mode, '|| modeTimes:', max, '|| mean: ', mean)
  
  return mode === mean;
}
let test = [1, 1, 2, 2, 0, 0]
console.log(modemean(test))

// module.exports = modemean;
