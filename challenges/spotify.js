//a2[b2[c]2[d]]5[e] = abccddbccddee
function parseBracketString (bracketString, repeatTimes = 1) {
  let resultString = '';
  let repeatString = '';

  for (let charIdx = 0; charIdx < bracketString.length; charIdx++) {
    let char = bracketString.charAt(charIdx);

    //if number
    if (!isNaN(char)) {
      repeatString += char;
    }
    //if bracket, find the matching closing bracket
    else if (char === '[') {
      // console.log('hi')
      let openBracketCount = 1;
      let closedBracketCount = 0;
      let bracketIdx = charIdx + 1;
      while (openBracketCount !== closedBracketCount) {
        if (bracketString.charAt(bracketIdx) === '[') {
          openBracketCount++;
        }
        else if (bracketString.charAt(bracketIdx) === ']') {
          closedBracketCount++;
        }
        bracketIdx++;
      }
      //make new string, take off both ends
      let newBracketString = bracketString.substring(charIdx + 1,bracketIdx - 1);
      //recursive call
      resultString+= parseBracketString(newBracketString, parseInt(repeatString));

      //fast forward charIdx, reset repeat string;
      charIdx = bracketIdx-1;
      repeatString = '';
    }
    //if letter
    else if(isNaN(char)) {
      resultString += char;
    }
  }
  //multiply result string
  return resultString.repeat(repeatTimes);
}

console.log(parseBracketString('a5[b2[c]2[d]]5[e]'));




