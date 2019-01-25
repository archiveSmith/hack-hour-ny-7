let arr = [10, 20, 100, 1, 120]
let arr2 = [50, 40, 10, 0]
let arr3 = [10, 30, 50, 60]

//brute
//loop thru arr, subtract curr from each number to right, push to profits
//return max in arr or 0 if neg

// function bestProfit(stock_prices_yesterday) {
//   if (!Array.isArray(stock_prices_yesterday)) return 0;

//   let profits = [];
//   for (let i = 0; i < stock_prices_yesterday.length; i++) {
//     for (let j = i + 1; j < stock_prices_yesterday.length; j++) {
//       profits.push(stock_prices_yesterday[j] - stock_prices_yesterday[i])
//     }
//   }
//   console.log(Math.max(...profits) < 0 ? 0 : Math.max(...profits))
//   return Math.max(...profits) < 0 ? 0 : Math.max(...profits);
// }
function bestProfit(stock_prices_yesterday) {
  let maxprofit = 0;
  let lowestprice = Infinity;

  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    if (stock_prices_yesterday[i] < lowestprice) {
      lowestprice = stock_prices_yesterday[i];
      console.log('lowest price is: ', lowestprice)
    }
    if (stock_prices_yesterday[i] - lowestprice > maxprofit) {
      maxprofit = stock_prices_yesterday[i] - lowestprice;
      console.log('maxprofit is: ', maxprofit)
    }
  }
  console.log(maxprofit)
  return maxprofit;
}

bestProfit(arr);
// bestProfit(arr2);
// bestProfit(arr3);