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
let prices= [600,500,700,300,400,800];
console.log(bestProfit(prices));

function bestProfitNaive(stock_prices_yesterday) {
    if(!stock_prices_yesterday || stock_prices_yesterday.length === 0) { return 0 };

    let currentMaxProfit = 0;

    for (let i = 0; i < stock_prices_yesterday.length; i++) {
        let originalPrice = stock_prices_yesterday[i];
        for (let j = 0; j < stock_prices_yesterday.length; j++) {
            let currentPrice = stock_prices_yesterday[j];
            if (currentPrice - originalPrice > currentMaxProfit) {
                currentMaxProfit = currentPrice - originalPrice;
            }
        }
    }

    return currentMaxProfit;
}

function bestProfitDivideAndConquer(prices) {
    return bestProfitRec(prices, 0, prices.length-1, 0);

    function bestProfitRec (pricesArr, start, end, currentMaxProfit) {
        let mid = Math.floor((end-start)/2+start);
        console.log(start, mid, end);
        
        if(start===end){
            return 0;
        }

        let leftMin = pricesArr[start];
        for (let i = start+1; i <= mid; i ++){
            if(pricesArr[i] < leftMin) {
                leftMin = pricesArr[i];
            }
        }
        let rightMax = pricesArr[mid+1];
        for (let i = mid+2; i <= end; i ++){
            if(pricesArr[i] > rightMax) {
                rightMax = pricesArr[i];
            }
        }

        if(rightMax - leftMin > currentMaxProfit){
            currentMaxProfit = rightMax - leftMin;
        }

        let leftMaxProfit = bestProfitRec(pricesArr, start, mid, currentMaxProfit);
        let rightMaxProfit = bestProfitRec(pricesArr, mid+1, end, currentMaxProfit);
        currentMaxProfit = Math.max(leftMaxProfit,rightMaxProfit, currentMaxProfit);
        return currentMaxProfit;
    }
}

function bestProfitOptimizedDivideAndConquer(prices) {
    return bestProfitRec(prices, 0, prices.length-1, 0)[0];

    function bestProfitRec (pricesArr, start, end, currentMaxProfit) {
        let mid = Math.floor((end-start)/2+start);
        console.log(start, mid, end);
        
        if(start===end){
            //[profit, min value in range, max value in range]
            return [0, pricesArr[start], pricesArr[end]];
        }

        let leftResult = bestProfitRec(pricesArr, start, mid, currentMaxProfit);
        let rightResult = bestProfitRec(pricesArr, mid+1, end, currentMaxProfit);

        let leftMaxProfit = leftResult[0];
        let rightMaxProfit = rightResult[0];

        let leftMin = leftResult[1];
        let rightMax = rightResult[2];

        if(rightMax - leftMin > currentMaxProfit){
            currentMaxProfit = rightMax - leftMin;
        }

        currentMaxProfit = Math.max(leftMaxProfit,rightMaxProfit, currentMaxProfit);
        let minValueInRange = Math.min(leftResult[1], rightResult[1]);
        let maxValueInRange = Math.max(leftResult[2], rightResult[2]);

        //[profit, min value in range, max value in range]
        return [currentMaxProfit, minValueInRange, maxValueInRange];
    }
}

function bestProfit(prices) {
    if (!prices) { return 0 }
    if(prices.length <= 1){
        return 0;
    }

    let min = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let currentMaxProfit = prices[i] - min;

        if(currentMaxProfit > maxProfit) { maxProfit = currentMaxProfit; }
        if(prices[i] < min) { min = prices[i]; }
    }
    return maxProfit;
}

module.exports = bestProfit;
