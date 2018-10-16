// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if(str === ''){return true;}
  const stack = [];
  const strArray = str.split(/[^A-Za-z]/);

  for(let i = 0; i < strArray.length; i++){
    if(strArray[i] === ''){
      continue;
    }else if(stack.length === 0){
      stack.push(strArray[i]);
    }else{
      if(stack[stack.length - 1].toLowerCase() === strArray[i].toLowerCase().split('').reverse().join('')){
        stack.pop();
      }else{
        stack.push(strArray[i]);
      }
    }  
  }

  if(stack.length === 0){
    return true;
  }

  return false;
}

// console.log(matchWord('__END_DNE-----'));//true
// console.log(matchWord('__ENDDNE__'));//false
// console.log(matchWord('IF()()fi[]'));//true
// console.log(matchWord('for__if__rof__fi'));//false
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));//true
// console.log(matchWord(''));//true

module.exports = matchWord;
