def mergeArr(list1,list2):
    i=0
    j=0
    sortedArr = []

    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            sortedArr.append(list1[i])
            i += 1
        else:
            sortedArr.append(list2[j])
            j += 1
    
    if i < len(list1):
        sortedArr.extend(list1[i:])

    if j < len(list2):
        sortedArr.extend(list2[j:])
    # while i < len(list1):
    #     sortedArr.append(list1[i])
    #     i += 1


    # while j < len(list2):
    #     sortedArr.append(list2[j])
    #     j += 1

    return sortedArr

def mergeSort(arr):
    if len(arr) <= 1: return arr

    middleIdx = len(arr) // 2
    left = mergeSort(arr[0:middleIdx])
    right = mergeSort(arr[middleIdx:])

    return mergeArr(left,right)


print(mergeSort([1,3,52,4,6,8,11,5]))