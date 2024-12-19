const numbers = [3, 2, 10, 1, 9, 30, 41, 7, 12, 6];

const numbersSort = numbers.toSorted((a, b) => {
  return a - b;
});

const isEven = function (number) {
  return number % 2 === 0;
};

const sortedNumbers = numbersSort.toSorted((a, b) => {
  if (isEven(a) === isEven(b)) {
    return 0;
  }

  return isEven(a) ? -1 : 1;
});

console.log(sortedNumbers);
