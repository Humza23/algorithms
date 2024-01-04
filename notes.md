# Data Structures

### Linked Lists - 
    Singly Linked - O(1) insertion and O(1) or O(N) removal (depends since if at end have to iterate through all)
    Doubly Linked - O(1) insertion and O(1) removal
### Stack
    unshift to add
    shift to delete
### Queue
    push to add
    shift to delete

--
### Hash Table
    insert/deletion/access is O(1)

### Binary Search
    used for sorted data
    O(log n) logarithmic time 


# Sorting

### Bubble Sort
    Larger elements "bubble" to the end of array
    Start i at the end while i > 0
    Nested loop, i < arr.length, j < i-1
    if arr[j] > arr[j+1] swap
    check if any swaps on last iteration to avoid useless iterations and then break

    O(N^2)
    With almost sorted data - O(N)

### Selection Sort
    Go through and "select" the smallest values
    Find minimum, swap at end of each sub iteration
    start i =0
    track index with minIdx variable
    nested loop j = j+1
    if minIdx variable isnt same, swap

    O(N^2)

### Insertion Sort
    Start at 2nd element
    Compare 1 value with left side and "insert" it at the appropriate index.
    2nd loop is j=i-1; while arr[j] > currentVal; j-- to go from starting point to beginning
    arr[j+1] = arr[j]
    end of inner loop
    arr[j+1] = currentVal

    O(N^2)

### Merge Sort
    Splits array into 2 elements each, then to 1, then compares, then combines, and repeat.
    array of 8 elements becomes 4 of 2 until 1 element only and then combines
    code:
    merge Arr, while iterating through both
    add leftover arr
    mergeSort recursive function, if arr.length <= 1 return arr
    set a midPoint, and left/right using recursive function(arr[0:midpoint])
    return mergeFunction(left,right)

    O(n log n), it divides logarithmically and then does an n operation to sort

### Quick Sort
    Takes 1st element and figures out where it should be placed correctly

    PIVOT HELPER Function (arr,start=0,end=len-1):
    create a swap function
    start at 0
    pivot = arr[start]
    swapIdx = start
    if start+1 > pivot
    swapIdx++
    swap(arr,swapIdx,i)

    Then at the end you swap, swapIdx with start to correctly place the first element

    QuickSort function (arr,start=0,end=len-1):
        if left < right:
        pivotIdx = pivot(arr,left,right)
        quickSort(arr,left,pivotIdx-1)
        quickSort(arr,pivotIdx+1, right)

        return arr

    O(n log n) decomposing the arrays
    O(n^2) worst case if its sorted
    UNDERSTAND THE DIAGRAMING MORE SO THAN THE CODE AND HOW EACH ITERATION RUNS
    [4,6,9,1,2,5,3]
    [3,2,1,4,6,9,5]
           4
     3,2,1   6,9,5
         3    6
     2,1     5,9
     1