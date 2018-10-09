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

/* TASK LIST for fizzbuzz algorithm:
-create a function named 'fizzbuzz' with parameter: number
	-declare a variable called 'myArray'
	-iterate from 1 to the number parameter
		-if the current number is divisible by 3 then...
			-push the string 'fizz' to myArray
		-if the current number is divisible by 5 then...
			-push the string 'buzz' to myArray
		-if the current number is divisible by 3 and 5 then...
			-push the string 'fizzbuzz' to myArray
		-else...
			-push the current number to myArray
	-end of iteration
	-return myArray
*/
/* PSEUDOCODE for fizzbuzz
DEFINE fizzbuzz(number)
	READ number
	SET myArray = emptyArray
	FOR (iterator = 1, iterator <= number, add 1 to iterator)
		IF (iterator is divisable by 3 and 5)
			PUSH 'fizz' to myArray
		IF (iterator is divisable by 5)
			PUSH 'buzz' to myArray
		IF (iterator is divisable by 3)
			PUSH 'fizzbuzz' to myArray
		ELSE
			PUSH iterator to myArray
		ENDIF
	ENDFOR
	RETURN myArray
END fizzbuzz
*/
function fizzbuzz(num) {
	let myArray = [];
	for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
			myArray.push('fizzbuzz');
		} else if (i % 5 === 0) {
			myArray.push('buzz');
		} else if (i % 3 === 0) {
			myArray.push('fizz');
		}  else {
			myArray.push(i);
		}
	}
	return myArray;
}

module.exports = fizzbuzz;
