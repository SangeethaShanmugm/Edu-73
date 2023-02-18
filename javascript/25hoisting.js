console.log(a);
var a = 10;
var b = 20;
//undefined

// console.log(add(a, b));
// function add(a, b) {
//   return a + b;
// }

console.log(x);
var x = 50;
console.log(x);

//JIT process- Just In Time Compilation
//1 . Compilation Phase - console.log - skip
//2. Execution Phase
// JS, context

//example 1
//Compilation Phase
console.log(x); // SKip
var x = 50; // JS -> Do you know x? No | What is the value ->  context - undefined
console.log(x); // SKip

// Execution Phase

console.log(x); // JS -> Do you know x? Yes | What is the value ->  context - undefined
var x = 50; // JS -> Do you know x? Yes | What is the value ->  context -> Note down as x = 50
console.log(x); // JS -> Do you know x? Yes | What is the value ->  context - 50

//example 2

console.log(x);
let x = 50;
console.log(x);

//Compilation Phase
console.log(x); // SKip
let x = 50; // JS -> Do you know x? No | What is the value ->  context - dont initialise
console.log(x); // SKip

//Execution Phase
console.log(x); // JS -> Do you know x? Yes | What is the value ->  context - error
let x = 50;
console.log(x);

var z;
z = 10;
console.log(z); // 10

console.log(y); //undefined
var y = 10;

//fun hoisting

// greet();

// function greet() {
//   console.log("Hello");
// }

//"Hello"


greet()

let greet = function(){
    console.log("Hello")
}
//ReferenceError: greet is not defined