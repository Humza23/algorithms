var maxProfit = function(prices) {
    let maxProfit = 0;
    let firstPointer = 0
    let secondPointer = 1

    while(secondPointer<prices.length){
        if(prices[firstPointer] < prices[secondPointer]){
            maxProfit = Math.max(maxProfit, prices[secondPointer] - prices[firstPointer])
            secondPointer++
        }else{
            firstPointer = secondPointer
            secondPointer++
        }
    }
    return maxProfit

};

// [2,3,1,5]
// L.   R
//      L R