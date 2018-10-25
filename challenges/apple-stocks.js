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
// console.log("Hello from apple-stocks.js");

/* body of bestProfit function:
  -if the spy param is not an array return 0
  -assign infinity to lowestPrice variable
  -assign 0 to maxProfit variable
  -iterate through the spy param
    -assign the current element in the spy param to currentPrice

    -if the currentPrice is less than lowestPrice then...
      -reassign the lowestPrice to the currentPrice
    -else if the currentPrice minus the lowestPrice is greater than the maxProfit then...
      -reassign the maxProfit to be the evaluation of the currentPrice minus the lowestPrice
  -end of iteration
  -return maxProfit
*/
// @param spy = stock_prices_yesterday
function bestProfit(spy) {
  if (!Array.isArray(spy)) return 0;
  let lowestPrice = infinity;
  let maxProfit = 0;
  for (let i = 0; i < spy.length; i += 1) {
    let currentPrice = spy[i];

    if (currentPrice < lowestPrice) {
      lowestPrice = currentPrice;
    }
    else if (currentPrice - lowestPrice > maxProfit) {
      maxProfit = currentPrice - lowestPrice;
    }
  }
  return maxProfit;
}

console.log(bestProfit(89));

module.exports = bestProfit;
