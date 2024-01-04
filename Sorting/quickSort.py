def pivot(arr, start=0, end=None):
    if end is None:
        end = len(arr) - 1

    def swap(array, i,j):
        [array[i], array[j]] = [array[j], array[i]]

    pivot = arr[start]
    swapIdx = start


    for i in range(start + 1,len(arr)):
        if pivot > arr[i]:
            swapIdx += 1
            swap(arr,swapIdx,i)
            print(arr)
    
    swap(arr,start,swapIdx)
    return swapIdx

def quickSort(arr, left=0, right = None ):
    if right is None:
        right = len(arr) - 1

    if left < right:
        pivotIdx = pivot(arr,left, right)
        quickSort(arr,left,pivotIdx-1)
        quickSort(arr,pivotIdx+1, right)   

    return arr


print(quickSort([3,5,2,1,42,10,6]))
#            3 2 1 5 ..
#            1 2 3 5