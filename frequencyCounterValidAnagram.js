function validAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let letter of str1) {
    if (!frequencyCounter1[letter]) {
      frequencyCounter1[letter] = 1;
    } else {
      frequencyCounter1[letter] += 1;
    }
  }

  for (let letter of str2) {
    if (!frequencyCounter2[letter]) {
      frequencyCounter2[letter] = 1;
    } else {
      frequencyCounter2[letter] += 1;
    }
  }

  for (let val in frequencyCounter1) {
    if (
      !frequencyCounter2[val] ||
      frequencyCounter1[val] != frequencyCounter2[val]
    ) {
      return false;
    }
  }

  return true;
}