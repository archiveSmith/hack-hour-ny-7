// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  var array1 = ['dog', 'Ferret', 3, 4];
  var array2  = [56,75,'dog','Ferret'];
  var array3 = [1,2,'dog', 'Ferret'];
  var array4 = [4,6,7,'dog', 'Ferret'];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  const output = [];
  array1.forEach(el => {
    if (array2.includes(el) && array3.includes(el) && array4.includes(el) && !output.includes(el)) {
      output.unshift(el);
    }
  })
  return output.length > 0 ? output : 'Nothing in Common!';
}

console.log(commonElements(array1, array2, array3, array4));


module.exports = commonElements;
