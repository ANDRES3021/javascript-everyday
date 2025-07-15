let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);
console.log(sum);
