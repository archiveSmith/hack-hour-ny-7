/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */


function pow(base, power, existingValue = 0, isNegative = null) {   
    if(!isNegative){
      isNegative = power < 0;
      if(isNegative) {
        power *= -1;
      }
    }

    if(existingValue === 0) {
        existingValue = base;
    }

    if(power === 0){
      return 1;
    }
  
    if(power === 1) {
        if(isNegative){
          return 1/existingValue;
        } 
        else{
          return existingValue;
        }
    }

    existingValue *= base;
    
    return pow(base, power-1, existingValue, isNegative);
}

module.exports = pow;
