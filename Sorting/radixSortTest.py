# find digits place
# count digits
# mostDigits

def findDigitPlace(num, place):
    return num // 10**place % 10


def countDigits(num):
    return len(str(abs(num)))

def mostDigits(num):
    return max(map(countDigits, num))

def radixSort(nums):
    maxDigits = mostDigits(nums)

    for k in range(maxDigits):
        bucketList = [[] for _ in range(10)]
        for num in nums:
            digit = findDigitPlace(num, k)
            bucketList[digit].append(num)

        new_nums = []

        for sublist in bucketList:
            new_nums.extend(sublist)
        
        nums = new_nums

    return nums

print(radixSort([134, 231, 4323, 3,30,14]))