var a = 20;
var b = 20;
a + b;
40;

// keyword nameoffunction(parameters){
//     return output
// }

//function definition
function addition(a, b) {
  // parameters
  return a + b;
}

console.log(addition(20, 20)); //  function call
//(20, 20) =>  arguments

console.log(addition(50, 100));
console.log(addition(100, 100));

function isEven(input) {
  let out;
  if (input % 2 == 0) {
    out = `Number ${input} is even`;
  } else {
    out = `Number ${input} is odd`;
  }
  return out;
}

console.log(isEven(50)); // Number 50 is even
console.log(isEven(21)); // Number 21 is odd

//es6
//arrow function =>

let add = (a, b) => a + b;

let out;
const isEven1 = (input) => {
  if (input % 2 == 0) {
    out = `Number ${input} is even`;
  } else {
    out = `Number ${input} is odd`;
  }
  return out;
};

console.log(isEven1(4));

let greet = () => console.log("Hello");

greet(); //Hello

let age = 40;
let welcome =
  age < 25 ? () => console.log("Adult") : () => console.log("Tenage");
// 20 < 25
welcome();



let sum = (a, b) => {
  let result = a + b;
  return result;
};

let output = sum(5, 7);
console.log(output); //
