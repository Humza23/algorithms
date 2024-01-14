def getDigit(num, place):
    return num // 10**place % 10

# print(getDigit(7323,2))

def digitCount(num):
    return len(str(abs(num)))

# print(digitCount(1332))

def mostDigits(nums):
    return max(map(digitCount, nums))

# print(mostDigits([134, 232411, 4323, 3444]))


def radixSort(nums):
    maxDigitCount = mostDigits(nums)

    for k in range(maxDigitCount):
        digitBuckets = [[] for _ in range(10)]
        for num in nums:
            digit = getDigit(num, k)
            digitBuckets[digit].append(num)

        # Create a new list to hold the sorted values
        new_nums = []
        for sublist in digitBuckets:
            new_nums.extend(sublist)

        # Update the original nums list with the sorted values
        nums = new_nums

    return nums

print(radixSort([134, 231, 4323, 3,30,14]))
