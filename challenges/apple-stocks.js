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
  if(!stock_prices_yesterday || stock_prices_yesterday.length === 0){return 0;}
  let min = stock_prices_yesterday[0]; 
  let max = stock_prices_yesterday[0];
  let profit;

  for(let i = 0; i < stock_prices_yesterday.length; i++){
    if(stock_prices_yesterday[i] > max){
      max = stock_prices_yesterday[i];
    }
  }

  profitArray = stock_prices_yesterday.splice(0, stock_prices_yesterday.indexOf(max));

  for(let i = 0; i < profitArray.length; i++){
    if(profitArray[i] < min){
      min = profitArray[i];
    }
  }

  profit = max - min; 

  return profit > 0 ? profit : 0;
}

// const priceArray = [456, 234, 453, 324, 435, 543, 234, 565, 353, 453, 234, 345, 653, 657, 764, 234, 456, 454, 132, 345, 686, 567];

// console.log(bestProfit(priceArray));

module.exports = bestProfit;
