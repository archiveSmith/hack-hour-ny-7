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
    debugger;
    if (str === '') return true;
    str = str.replace(/[\W_]+/g," ");
    str = str.toLowerCase().trim();
    str = str.split(" ");
    let cache = {};
    
    for (let i = 0; i < str.length; i++) {
        let reverse = str[i].split("").reverse().join("");
        if (cache[reverse] !== undefined) {
            console.log("triggered");
            cache[reverse] += 1;
        } else {
            cache[str[i]] = 0;
        }
        
    }
    for (let keys in cache) {
        if (cache[keys] % 2 !== 1) {
            return false
        }
    }
    return true;

}

module.exports = matchWord;
