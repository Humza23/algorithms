     // 2 iterators
    // iteration i: start at 0 iterate through to end,
    // iteration j: start at i, and compare i+1
    // set a min variable to be first element index, compare each iteration with min, and the smallest, swap with first idx of iteration
function selectionSort(arr){
    
    for(let i=0; i< arr.length; i++){
        let minIdx= i
        for(let j =i+1; j< arr.length; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j
            }
        }
        if(minIdx != i){
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
        }
        console.log(arr);
    }
    return arr
}
    
console.log(selectionSort([7,13,2,4,1,90,23,30]))