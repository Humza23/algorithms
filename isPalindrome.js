function isPalindrome(str) {
  let filteredStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  if (!filteredStr.length) {
    return true;
  }

  let left = 0;
  let right = filteredStr.length - 1;

  while (left < right) {
    if (filteredStr[left] == filteredStr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Do geese see God?"));
