def merge(list1, list2):
    resultsArr = []
    i = 0
    j = 0

    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            resultsArr.append(list1[i])
            i += 1
        else:
            resultsArr.append(list2[j])
            j += 1
    
    while i < len(list1):
        resultsArr.append(list1[i])
        i += 1


    while j < len(list2):
        resultsArr.append(list2[j])
        j += 1

    return resultsArr

def mergeSort(arr):
    if len(arr) <= 1: return arr

    mid = len(arr) // 2
    left = mergeSort(arr[0:mid])
    right = mergeSort(arr[mid:])

    return merge(left,right)

print(mergeSort([1,10,100,75]))
                # 1,10   100,75
                # 1  10  100  75