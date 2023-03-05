//console.log(global);

const double = (num) => num * 2;

const add = (n1, n2) => n1 + n2;
// console.log(double(10));

// console.log(process.argv);

// const [, , n] = process.argv;
const [, , n1, n2] = process.argv;
// console.log(double(n));
console.log(add(+n1, +n2));
