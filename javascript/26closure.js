//closure -> own scope +  lexical scope
//parents scope - lexical scope
//your scope - own scope
//block = {}
// function x() {
//   var a = 10;
//   function y() {
//     console.log(a); //10
//   }
//   y();
// }
// x();

function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
z();
// ƒ y() {
//     console.log(a); //10
//   }
// z()

// function outer() {
//   var a = 20;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// // outer()();
// var close = outer();
// close();

//passing params
const outer = (b) => {
  const inner = () => {
    console.log(a, b); //10 'Hello'
  };
  let a = 10;
  return inner;
};
// outer()()
var close = outer("Hello");
close();
