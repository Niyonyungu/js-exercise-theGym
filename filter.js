function removingNumbers(Str) {
  const numbers = Array.from(Str).filter((character) => !isNaN(character));
  return numbers.join("");
}

console.log(removingNumbers("12fsfrsf34h5h6hh7h"));
