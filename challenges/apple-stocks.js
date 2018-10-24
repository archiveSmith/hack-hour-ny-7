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
  let maxProfit = 0;
  if (!Array.isArray(stock_prices_yesterday)) return maxProfit;
  for (let i = 0; i < stock_prices_yesterday.length - 1; i++) {
    let latterPrices = stock_prices_yesterday.slice(i);
    let max = Math.max(...latterPrices);
    let profitSet = max - stock_prices_yesterday[i];
    if (profitSet > maxProfit) {
      maxProfit = profitSet;
    }
  }
  return maxProfit;
}

module.exports = bestProfit;