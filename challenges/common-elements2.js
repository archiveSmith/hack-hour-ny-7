var array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
var array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog', 1000, 99];
var array3 = [23, 12, 12, 77, 'ferret', 9, 88, 100, 'dog', 1000, 99];
var array4 = ['ferret', 12, 12, 45, 9, 66, 77, 78, 2000, 'dog'];

let concatarruniq = (acc, cv) => {
  return acc.concat([...new Set(cv)])
}

function commonElements(array1, array2, array3, array4) {

  let concat = [...arguments].reduce(concatarruniq, [])
  //[ 1,4,6,7,'ferret',12,99,2000,'dog',1000,15,9,'ferret',26,12,'dog',1000,99,23,12,77,'ferret',9,88,100,'dog',1000,'ferret',12,45,9,66,77,78,2000 ]

  let obj = {
    1: [],
    2: [],
    3: [],
    4: []
  };
  let result = [];

  for (el of concat) {
    if (obj[3].includes(el)) {
      obj[4].push(el);
    } else if (obj[2].includes(el)) {
      obj[3].push(el);
    } else if (obj[1].includes(el)) {
      obj[2].push(el);
    } else {
      obj[1].push(el);
    }
  }
  return obj[4];
}
console.log(commonElements(array1, array2, array3, array4));