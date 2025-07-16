const car = [
  { name: "Manzanas", quantity: 3, unitPrice: 200 },
  { name: "Pan", quantity: 2, unitPrice: 150 },
  { name: "Leche", quantity: 1, unitPrice: 300 },
  { name: "Huevos", quantity: 2, unitPrice: 500 },
];

const carTotal = car.reduce((acc, product) => {
  let { quantity, unitPrice } = product;
  let price = quantity * unitPrice;
  acc += price;
  return acc;
}, 0);
console.log(carTotal);
