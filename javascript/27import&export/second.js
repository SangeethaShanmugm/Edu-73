//import { double, msg } from "./first"; // named import
import dbObj from "./first.js"; // default import
// import double from "./first.js";
//let myObj = require("./first"); // es5 import
console.log(dbObj.user);
console.log(dbObj.calc.sum(5, 5));
console.log(double(10));
console.log(msg);

//es5 import - require
let welcome = require("./first");

console.log(welcome);

//es6 named import

import { welcome, text } from "./first";

console.log(welcome);
console.log(text);

//es6 default import

import welcome from "./first";
import text from "./third";

console.log(text)