const fruits = ["manzana", "banana", "manzana", "pera", "banana", "manzana"];

const fruits_object = fruits.reduce((obj, fruit) => {
  if (!obj[fruit]) {
    obj[fruit] = 0;
  }
  obj[fruit] += 1;

  return obj;
}, {});

console.log(fruits_object);
