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
console.log('Hello from num-to-words.js');
 /** numToWords(main):
  * -READ num = 0
  * -SET word = emptyString
  *
  * 
  * -SWITCH if (between(num, 0, 10))
  *   -CASE if num is 0
  *     -RESET word = "Zero"
  *   -Case if num is 1
  *     -RESET word = "One"
  * -PRINT word
  */

  /** between(module):
   * -READ x, min, max
   * -RETURN true if x is >= min and x is <= max
   */

   /**
    * -convert num param to string and assign it to numString
    * -split numstring into threes and assign it to threesArr
    * - return pasreThreeArray
    */

    /**splitToThree(numString)
     * - SET 3Arr = []
     * - for (i=0,i<length of numString, add 3 to i)
     *  -SLICE numString starting at the current Element, and stop at the current Element plus 3
     * -return 3Arr
     */

     /**parseThreesArr(array)
      * 
      * 
      */

      /**parseThreeNumbers(3String)
       * 
       * 
       */

    //  @param {} num 

function numToWords(num) {
  let word = '';

  if (between(num, 0, 10)) {
    switch (num) {
      case 0:
        word = 'Zero';
        break;
      case 1:
        word = 'One';
        break;
      case 2:
        word = 'Two';
        break;
      case 3:
        word = 'Three';
        break;
      case 4:
        word = 'Four';
        break;
      case 5:
        word = 'Five';
        break;
    }
  }

  return word;
}

function between(x, min, max) {
  return x >= min && x <= max; 
}

console.log(numToWords(0));
console.log(numToWords(1));
console.log(numToWords(2));
console.log(numToWords(3));
console.log(numToWords(4));
console.log(numToWords(5));

module.exports = numToWords;

