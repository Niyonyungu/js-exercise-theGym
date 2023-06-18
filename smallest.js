function smallest(arr) {
  let biggestArray = arr.sort((a, b) => b - a);
  let lastNumber = biggestArray[biggestArray.length - 1];
  console.log(lastNumber);
}
smallest([34, -345, -1, 100]);
