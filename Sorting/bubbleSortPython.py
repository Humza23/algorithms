def bubbleSort(arr):
    for i in range(len(arr)-1, 0, -1):
        j=0
        noSwaps = True
        while j < i:
            if arr[j] > arr[j+1]:
                arr[j+1], arr[j] = arr[j], arr[j+1]
                noSwaps = False
            j += 1
        if noSwaps: break
    return arr

print(bubbleSort([2,1,4,5,1,8,3]))