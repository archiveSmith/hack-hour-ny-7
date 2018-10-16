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
  let output = true
  // make everything the same case
  let string = str.toLowerCase();

  // determine which words are in string
  let arr = string.split(/[^a-zA-Z]/).filter(str => str !== '');

  // create a stack to iterate through array and make sure everything closes in order
  let stack = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let reverse = arr[i].split('').reverse().join('');
    if (stack[0] === reverse) { stack.shift() }
    else { stack.unshift(arr[i]) }
  }
  return (stack.length === 0);
}


module.exports = matchWord;
