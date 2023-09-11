function maxProfit(prices){
    let left = 0
    let right = 1
    let maxProfit = 0;

    while (right < prices.length){
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left]

            maxProfit = Math.max(maxProfit, profit)
        } else {
            left = right
        }
        right++
    }
    return maxProfit


}


console.log(maxProfit([2,4,5,1,9,2]))