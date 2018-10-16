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
    let charArr = str.split(/[^a-z|^A-Z]+/);
    let loweredArr = charArr.map(element => {
        return (element.toLowerCase());
    })
    
    loweredArr.forEach((element,index) => {
        if (element === ""){
            loweredArr.splice(index,1);
        }
    });

    let wordStack = [];
    loweredArr.forEach(word => {
       if (wordStack.length === 0){
           wordStack.push(word);
       } else if(wordStack[wordStack.length-1] === word.split('').reverse().join('')){
           wordStack.pop();
       } else{
           wordStack.push(word);
       }
    });

    return wordStack.length === 0;
}
module.exports = matchWord;
