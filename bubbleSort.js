function bubbleSort(arr){
    for(let i=arr.length-1;i>=0; i--){
        for(let j=0;j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                [ arr[j],arr[j+1] ] = [ arr[j+1],arr[j] ]
            }
        }
    }

    return arr

}


console.log(bubbleSort([4,3,2,2,1,5,8,11,9]))