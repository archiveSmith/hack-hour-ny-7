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
    if(str.length === 0) return true;
      strArr = str.toLowerCase().split('');
      let alphabet = 'abcdefghijklmnopqrstuvwxyz'
      let word = '';
      let wordArr = [];
      for(let index = 0; index < strArr.length; index++) {
        word = '';
        while(alphabet.includes(strArr[index])) {
          word += strArr[index];
          index++;
        }
  
        if(wordArr[wordArr.length - 1] === word.split('').reverse().join('')) {
          wordArr.pop();
        } else if(word) {
          wordArr.push(word);
        }
      }
      return wordArr.length === 0 ? true : false;
  }

module.exports = matchWord;
