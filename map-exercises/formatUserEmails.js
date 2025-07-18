const users = [
  { firstName: "Alice", lastName: "Johnson" },
  { firstName: "Bob", lastName: "Smith" },
  { firstName: "Charlie", lastName: "Brown" },
];

const format = users.map(
  (value) =>
    value.firstName.toLocaleLowerCase() +
    "." +
    value.lastName.toLocaleLowerCase() +
    "@email.com"
);
console.log(format);
