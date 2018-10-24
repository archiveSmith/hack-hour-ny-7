/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) { return 0 }
  let max = 0;
  const len = stock_prices_yesterday.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      let profit = stock_prices_yesterday[i] - stock_prices_yesterday[j];
      if (profit > max) {
        max = profit;
      }
    }
  }
  return max;
}


// console.log(bestProfit([2, 4, 6, 4, 8, 12, 15, 3]));

module.exports = bestProfit;
