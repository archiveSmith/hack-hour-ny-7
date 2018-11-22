'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let arr = [];
  for(let i = 1; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}



// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  return sum;
}

//algorithm solves unique nums in array, if one is a dup. etc.

/*
1,2,3.....97,98,99,100
(50x100)+50
(n/2xn) x n/2 = n(n+1)/2
plug in highest numtiple of 3 and 5
*/





const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
