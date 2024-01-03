def selectionSort(arr):
    for i in range(len(arr)):
        minIdx = i
        for j in range(i+1,len(arr)):
            if arr[minIdx] > arr[j]:
                minIdx = j
        
        if minIdx != i:
            arr[i], arr[minIdx] = arr[minIdx], arr[i]
    
    return arr

print(selectionSort([7,13,2,4,1,90,23,30]))