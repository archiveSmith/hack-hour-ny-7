/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  if(!str || str.length === 1){return true;}
  let strArry = str.split(''); 
  let strObj = {};
  let oddCounter = 0;

  for(let i = 0; i < strArry.length; i++){
    if(!strObj[strArry[i]]){
      strObj[strArry[i]] = 1;
    }else{
      strObj[strArry[i]]++;
    }
  }

  for(let prop in strObj){
    if(oddCounter > 1){
      return false;
    }

    if(strObj[prop] % 2 !== 0){
      oddCounter += 1;
    }
  }

  return oddCounter <= 1 ? true : false;
}

module.exports = permPalin;