function countUniqueValues(arr) {
  if (!arr.length) return 0;

  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[right] == arr[left]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}
