function sumOfDifferences(arr) {
  let desc = arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 1; i < desc.length; i++) {
    sum = sum + desc[i - 1] - desc[i];
  }

  if (arr.length <= 1) {
    return 0;
  }
  return sum;
}

console.log(sumOfDifferences([1, 2, 3, 4, 5]));
