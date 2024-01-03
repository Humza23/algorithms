


function insertionSort(arr){
    for(let i =0; i< arr.length;i++){
        let currentVal = arr[i]
        let j
        for(j=i-1; j>=0 && arr[j] > currentVal; j--){
            
            arr[j+1] = arr[j]
            console.log(arr);
        }
        console.log(arr);

        arr[j+1] = currentVal
    }
    return arr
}
console.log(insertionSort([1, 3, 2, 5, 3]));
