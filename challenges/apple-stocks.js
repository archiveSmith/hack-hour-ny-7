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
  let arr = stock_prices_yesterday;
  let max = Math.max.apply(Math, arr);
  let maxInd = arr.indexOf(max);
  
  let min = Math.min.apply(Math, arr);
  let minInd = arr.indexOf(min);
  
  if (minInd<maxInd) {
    return max - min;
  }
  
  //loop up to max number, get biggest difference
  let newArr = arr.slice(0, maxInd);
  let diff = newArr.map(x => max-x);
  return Math.max.apply(Math, diff);
}

module.exports = bestProfit;
