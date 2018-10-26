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

function numToWords(num) {
  if(typeof num !== "number"){
    return;
  }
  let resultString = "";

  let commaGroupingArr = (num.toString().match(/.{1,3}/g));
  console.log(commaGroupingArr);

  for(let i = 0; i< commaGroupingArr.length; i++){
    resultString+=threeDigitGroupingToWord(commaGroupingArr[i],commaGroupingArr.length-i-1);
  }

  //REPLACE TWEENS
  resultString = tweensToWord(resultString);
  
  return (resultString);
}
function threeDigitGroupingToWord(digitString,commaCount){
  let resultString = "";

  //TAKING CARE OF THE DIGITS
  if(digitString.length===3){
    resultString += digitToWord(Number.parseInt(digitString.split("")[0]))+'Hundred';
    digitString=digitString.slice(1);
  }

  if(digitString.length===2){
    resultString += tensDigitToWord(Number.parseInt(digitString.split("")[0]));
    digitString=digitString.slice(1);
  }

  if(digitString.length===1) {
    resultString += digitToWord(Number.parseInt(digitString));
  }

  //TAKING CARE OF THE COMMAS
  resultString+=commaCountToWord(commaCount)

  return resultString;
}

function commaCountToWord(commaCount){
  switch(commaCount) {
    case 0:{
      return "";
    }
    case 1:{
      return "Thousand";
    }
    case 2:{
      return "Million";
    }
    case 3:{
      return "Billion";
    }
    case 4:{
      return "Trillion";
    }
    case 5:{
      return "Quadrillion";
    }
    case 6:{
      return "Quintillion";
    }
    default:{
      throw Error('too big number');
    }
  }
}

function tensDigitToWord(digit){
  switch(digit) {
    case 0:{
      return "";
    }
    case 1:{
      return "Tenty";
    }
    case 2:{
      return "Twenty";
    }
    case 3:{
      return "Thirty";
    }
    case 4:{
      return "Fourty";
    }
    case 5:{
      return "Fifty";
    }
    case 6:{
      return "Sixty";
    }
    case 7:{
      return "Seventy";
    }
    case 8:{
      return "Eighty";
    }
    case 9:{
      return "Ninety";
    }
  }
}

function digitToWord(digit){
  switch(digit) {
    case 0:{
      return "";
    }
    case 1:{
      return "One";
    }
    case 2:{
      return "Two";
    }
    case 3:{
      return "Three";
    }
    case 4:{
      return "Four";
    }
    case 5:{
      return "Five";
    }
    case 6:{
      return "Six";
    }
    case 7:{
      return "Seven";
    }
    case 8:{
      return "Eight";
    }
    case 9:{
      return "Nine";
    }
  }
}

function tweensToWord(string){
  string = string.replace(/TentyOne/g,'Eleven');
  string = string.replace(/TentyTwo/g,'Twelve');
  string = string.replace(/TentyThree/g,'Thirteen');
  string = string.replace(/TentyFour/g,'Fourteen');
  string = string.replace(/TentyFive/g,'Fifteen');
  string = string.replace(/TentySix/g,'Sixteen');
  string = string.replace(/TentySeven/g,'Seventeen');
  string = string.replace(/TentyEight/g,'Eighteen');
  string = string.replace(/TentyNine/g,'Nineteen');
  return string;
}

console.log(numToWords(987654311));
module.exports = numToWords;
