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

//fellow solution:

function modemean(array) {
  return (mean(array) === mode(array));
}

function mean(array) {
  let sum = array.reduce((sum, next) => sum + next)
  return Math.floor(sum / array.length);

}

function mode(array) {
  const reference = {};
  const modes = [];
  let maxCounts = 0;
  for (let i = 0; i < array.length; i++) {
    if (reference[array[i]]) {
      reference[array[i]]++
      if (reference[array[i]] > maxCounts) maxCounts = reference[array[i]];
    }
    else {
      reference[array[i]] = 1;
    }
  }
  for (let key in reference) {
    if (reference[key] === maxCounts) modes.push(key);
  }
  if (modes.length === 1) return parseInt(modes[0])
  return parseInt(modes.sort((a, b) => a < b)[0]);
}
/////alternate mode approach 
// function mode2(array) {
//   var count = {};
//   array.forEach(function(num) {
//     if (num in count) {
//       return count[num]++;
//     }
//     count[num] = 1;
//   });
//   var max = -Infinity;
//   var modeCandidates;
//   for (var num in count) {
//     if (count[num] > max) {
//       modeCandidates = [num];
//       max = count[num];
//     } else if (count[num] === max) {
//       modeCandidates.push(num);
//     }
//   }
//   return Math.max.apply(this, modeCandidates);
// }


module.exports = modemean;
