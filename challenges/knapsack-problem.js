/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  const matrix = [];
  for (let i = 0; i <= items.length; i++) {
    matrix[i] = new Array(weightAvailable + 1).fill(0);;
  }

  for (let i=1; i<=items.length; i++) {
    for (let j=1; j<=weightAvailable; j++) {
      if (j < items[i-1].weight) {
        matrix[i][j] = matrix[i-1][j]
      } else {
        matrix[i][j] = Math.max((items[i-1].value + matrix[i-1][j-items[i-1].weight]), matrix[i-1][j])
      }
    }
  }
  return matrix[items.length][weightAvailable]
};

// const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];

// console.log(solveKnapsack(items, 7))

module.exports = solveKnapsack;
