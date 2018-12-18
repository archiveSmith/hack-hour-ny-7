/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

var items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];

function solveKnapsack(items, weightAvailable) {
  let results = genCombosRecursive([], items, [])
  //to remove the empty arr, slice
  .slice(1)
  .map(result => {
    return result.reduce((acc, cur) => {
      return {
        weight : acc.weight + cur.weight,
        value : acc.value + cur.value,
      }
    });
  })
  .filter(result => result.weight <= weightAvailable)
  .map(result => result.value)
  .reduce((acc, cur) => acc > cur ? acc : cur)

  console.log(results);

  function genCombosRecursive (active, remaining, results) {
    if (remaining.length === 0) {
      results.push(active);
      return results;
    }

    //skip first char
    let activeCopy1 = active.slice();
    let remainingCopy1 = remaining.slice(1);
    genCombosRecursive(activeCopy1, remainingCopy1, results);

    //include first char
    let activeCopy2 = active.slice();
    activeCopy2.push(remaining[0]);
    let remainingCopy2 = remaining.slice(1);
    genCombosRecursive(activeCopy2, remainingCopy2, results);

    return results;
  }
};

console.log(solveKnapsack(items, 5));

module.exports = solveKnapsack;