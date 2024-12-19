const numbers = [3, 2, 10, 1, 9, 30, 41, 7, 12, 6];
const strings = ['max', 'silver', 'incredible', 'hulk'];

const sortedNumbers = numbers.toSorted((a, b) => {
  return a - b;
});
const lengthSortedStrings = strings.toSorted((a, b) => {
  return a.length < b.length ? -1 : 1;
});

console.log(sortedNumbers, '\n', lengthSortedStrings);