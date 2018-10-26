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

let eng = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '1000': 'thousand'
};
// function numToWords(num) {
//   let num2 = num.toString().split('');

//   let result = '';
//   num2.forEach((x) => {
//     result += obj[x]
//   });
//   return result;
// }

function numToWords(num) {
let result = '';

if (num >= 1000) {
  result += eng[Math.floor(num/1000)];
  result += 'thousand';
  num = num%1000;
  // console.log('hi', num, result)
}
if (num >= 100) {
  result += eng[Math.floor(num/100)];
  result += 'hundred';
  num = num%100;
  // console.log('yo', num, result)
}
if (num >= 10) {
  result += eng[Math.floor(num/10)];
  num = num%10;
  result += 'ty';
  // console.log('ey', num, result)
}
result += eng[num];

return result;
}

module.exports = numToWords;
