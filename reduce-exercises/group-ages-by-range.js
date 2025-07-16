const people = [
  { name: "Alice", age: 10 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 17 },
  { name: "Eva", age: 7 },
  { name: "Frank", age: 30 },
];
const agesObject = people.reduce(
  (acc, person) => {
    let { age } = person;
    if (age <= 12) {
      acc["child"] += 1;
    } else if (age <= 17) {
      acc["teen"] += 1;
    } else {
      acc["adult"] += 1;
    }
    return acc;
  },
  { child: 0, teen: 0, adult: 0 }
);
console.log(agesObject);
