// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){

}






//*********************************fellow solution *********************************
function reduceByUniqueValues(acc, curr){
  const uniques = [...new Set(curr)];
  return acc.concat(uniques);
};

function reduceByCount(acc, curr, index, array){
  if (curr in acc){
    if(typeof curr === typeof acc[curr][0].value) {
      acc[curr][0].count++
    } else if (acc[curr][1]){
      acc[curr][1].count++;
    } else {
      acc[curr] = acc[curr].concat([{ count: 1, value: curr }]);
    }
  } else {
    acc[curr] = [{ count: 1, value: curr }];
  }
  return acc;
};

function reduceByArguments(length){
  return function(acc, curr){
    return acc.concat(curr.filter(obj => obj.count === length));
  }
};

function commonElements(){
  const elements = [...arguments]
    .reduce(reduceByUniqueValues, [])
    .reduce(reduceByCount,{});

  const commons = Object.values(elements)
    .reduce(reduceByArguments(arguments.length),[])
    .map(common => common.value);

  return commons.length ? commons : "Nothing in Common!";
};

module.exports = commonElements;
