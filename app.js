// Quick Question #1
// {1, 2, 3, 4}

// Quick Question #2
// 'ref'

// Quick Questions #3
// 0: {Array(3) => true}
// 1: {Array(3) => false}

// hasDuplicate
function hasDuplicate(arr) {
  const setFromArr = new Set(arr);
  if (arr.length !== setFromArr.size) {
    return true;
  } else {
    return false;
  }
}

// vowelCount
function vowelCount(str) {
  const vowels = "aeiou";
  const newMap = new Map();
  for (let char of str) {
    if (vowels.indexOf(char) !== -1 && !newMap.has(char)) {
      newMap.set(char, 1);
    } else if (vowels.indexOf(char) !== -1 && newMap.has(char)) {
      newMap.set(char, newMap.get(char) + 1);
    }
  }
  return newMap;
}
