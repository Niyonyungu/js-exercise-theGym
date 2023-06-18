function arrayPlusArray(arr1, arr2) {
  let sumOfArrays = 0;
  for (let i = 0; i < arr1.length; i++) {
    sumOfArrays = sumOfArrays + arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sumOfArrays = sumOfArrays + arr2[i];
  }
  return sumOfArrays;
}

console.log(arrayPlusArray([1, 2, 3], [2, 4]));
