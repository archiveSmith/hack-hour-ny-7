// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {

  //create array of 1 to 100;
  let arr = [];
  for(let i = 1; i <= num; i++) {
    arr.push(i);
  }
  
  for(let i = 1; i <= num; i++) {
    //check for 3
    if(arr[i] % 15 === 0) {
      arr[i] = 'fizzbuzz';
    }
    else if(arr[i] % 3 === 0) {
      arr[i] = 'fizz';
    }
    else if(arr[i] % 5 === 0) {
      arr[i] = 'buzz'
    }
  }

  arr.forEach((element) => {
  	console.log(element);
  });
  
  return arr;
}

module.exports = fizzbuzz;
