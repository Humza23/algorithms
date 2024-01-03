def insertionSort(arr):
    for i in range(len(arr)):
        currentVal = arr[i]
        j = i-1
        while j >=0 and currentVal < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = currentVal
    
    return arr

print(insertionSort([1,3,2,4,6,2]))