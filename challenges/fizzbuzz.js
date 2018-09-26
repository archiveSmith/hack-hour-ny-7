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

        // let loop = [1,2,3]
    let bucket = []
    for(let loop = 1  ; loop <= num; loop++){
        if(loop % 3 === 0 ){
    bucket.push('fizz')
        }
        if(loop % 5 === 0){
            bucket.push('buzz')
        }
        bucket.push(loop)
        if (loop % 3 === 0 && loop % 5 === 0){
            bucket.push('fizzbuzz')
        }
    }
    return bucket
    }
    
fizzbuzz(17)

module.exports = fizzbuzz;
