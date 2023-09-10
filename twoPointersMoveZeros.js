// Given an array of integers, move all the 0s to the back of the array while maintaining the relative order of the non-zero elements. Do this in-place using constant auxiliary space.

// Input:

// [1, 0, 2, 0, 0, 7]
// Output:

// [1, 2, 7, 0, 0, 0]

function moveZeros(nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
}

console.log(moveZeros([1, 4, 2, 0, 0, 7]));
