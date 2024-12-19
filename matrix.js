const arrays = [[3, 4], [1, 2, 3], [2, 5, 6], [3, 4, 1], [5, 2], [2, 1]];

const subSetSort = arrays.map((element) => {
  return element.toSorted((a, b) => {
    return a - b;
  });
});

const firstElementSort = subSetSort.toSorted((a, b) => {
  return a[0] - b[0];
});

const sortedMatrix = firstElementSort.toSorted((a, b) => {
  return a[0] === b[0] ? a.length - b.length : 0;
});

console.log(sortedMatrix);