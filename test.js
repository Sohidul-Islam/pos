var std = [];
let tmp;

for (let i = 0; i < 5; i++) {
  j = 0;
  tmp = {
    prodid: i,
    variant: (j = i + 2),
    stock: (j = i + 5),
    brand: "hp",
  };
  std.push(tmp);
}

console.log(std);
