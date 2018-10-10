/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    if(n <= 0){
      return false;
    }

    numerals = [1000,500,100,50,10,5,1];
    numeralChars = ['M','D','C','L','X','V','I'];
    let numeralsResultObj = {}

    //populate numeralsResultObj
    numerals.forEach(numeral => {
      let numeralCounter = 0;
      while(numeralCounter * numeral < n){
          numeralCounter++;
          console.log(numeralCounter*numeral);
      }
      //decrement due to the conditions of the while loop, need to remember to increment by one at the end.

      numeralCounter--;
      numeralsResultObj[numeral] = numeralCounter;

      n-= (numeralCounter*numeral);

    });
    //take care of the final value
    numeralsResultObj[1]++;

    //go through numerals again, create string
    let numeralsString = "";
    numerals.forEach(numeral => {
      let numeralChar;
      switch (numeral){
        case 1000:
          numeralChar = 'M';
          break;
        case 500:
          numeralChar = 'D';
          break;
        case 100:
          numeralChar = 'C';
          break;
        case 50:
          numeralChar = 'L';
          break;
        case 10:
          numeralChar = 'X';
          break;
        case 5:
          numeralChar = 'V';
          break;
        case 1:
          numeralChar = 'I';
          break;
      }

      numeralsString = numeralsString + numeralChar.repeat(numeralsResultObj[numeral]);
    });

    //reduce string with groupings of 4 ie XXXX = XL
    for(let i = 0; i < numeralsString.length; i++){
      if(numeralsString[i] !== 'M' && numeralsString[i] === numeralsString[i+1] && numeralsString[i+1] == numeralsString[i+2] && numeralsString[i+2] == numeralsString[i+3]){
        let replacedChar = numeralsString[i]+numeralChars[numeralChars.indexOf(numeralsString[i])-1];
        numeralsString = numeralsString.substring(0,i) + replacedChar + numeralsString.substring(i+4);
      }
    }

    //reduce string with groupings of 3 ie VIV = IX
    for(let i = 0; i < numeralsString.length; i++){
      if(numeralsString[i] !== 'M' && numeralsString[i] == numeralsString[i+2]){
        let replacedChar = numeralsString[i+1] + numeralChars[numeralChars.indexOf(numeralsString[i])-1];

        numeralsString = numeralsString.substring(0,i) + replacedChar +numeralsString.substring(i+3);
      }
    }


    return numeralsString;
}

module.exports = romanNumeral;
