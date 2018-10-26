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

function numToWords(num, string = '') {
  if (!num) { return num; }
  let stringNum = num.toString();
  let newString = string;
  let ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  let tenUp = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  let tens = ['', '', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  switch (stringNum.length) {

    case (1):
      return ones[num];

    case (2):
      if (stringNum[0] === '1') {
        return tenUp[Number(stringNum[1])];
      } else {
        if (stringNum[1] === '0') {
          return tens[Number(stringNum[0])];
        } else {
          newString += tens[Number(stringNum[0])];
          return newString += numToWords(Number(stringNum.slice(1)), newString);
        }
      }
  }
}

console.log(numToWords(65));

module.exports = numToWords;
