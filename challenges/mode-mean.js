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
    let len = array.length;
    let dupCache = [];
    let modes = {};
    let count = 0;
    let mean;
    let mode;
  
    mean = array.reduce((acc, cur, idx) => {
      return acc + cur;
    })
  
    array.reduce((acc, cur, idx) => {
      acc = array[idx -1];
      dupCache.push(acc)
      console.log(cur)
      if (dupCache.includes(cur)) {
        console.log('match!')
        modes[cur] = count++;
      }
    })
  
    Object.keys(modes).reduce((acc, cur) => {
      if(modes[acc] > modes[cur]) {
        mode = acc
      } else if (modes[acc] < modes[cur]){
        mode = cur;
      } else if (modes[acc] === modes [cur]) {
        mode = Math.max(...modes);
      }
    });
  
    mean = mean / len;
  
    if (mean === mode) {
      return true;
    } else {
      return false;
    }
  }

module.exports = modemean;
