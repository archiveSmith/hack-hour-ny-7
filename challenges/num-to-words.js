// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

let ones = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
let teens = ['Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']; //if all zeros and two number digits not zero, use tens.
let tens = ['Ten','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety'];
let higher = ['Hundred','Thousand','Million','Billion','Trillion','Quadrillion'];

function numToWords(num) {
  let strNum = num.toString();
  console.log(strNum);
  let str = '';
  let digits = strNum.length;
  console.log(digits);
  if(digits === 1) {
    return str += ones[num];
  } else if (digits === 2 && strNum[0] === '1' && strNum[0,1] !== '0') {
    return str += teens[strNum[1]-1]; //minus one because begins with eleven at 0 index;
  } else {
    if(strNum[1] === '0') {
      return str += (tens[strNum[0]-1]);
    }
    return str += (tens[strNum[0]-1] + ones[strNum[1]])
  }
}

numToWords(99);

module.exports = numToWords;
