// if (condition) {
// } else {
// }

let a = 11;
if (a % 2 == 0) {
  console.log(`Number ${a} is even`);
} else {
  console.log(`Number ${a} is odd`);
}

let uname = "Ana";
if (uname == "John") {
  console.log(`Hi ${uname} you are admin`);
} else if (uname == "Jack") {
  console.log(`Hi ${uname} you are super admin`);
} else {
  console.log(`Hi ${uname} you are unknown`);
}

let name = "Jack";
let role = "Admin";
if (role == "Admin") {
 //Admin  ==  Admin ✅
  if (name == "John") {
    //Jack == John ❌
    console.log(`Hi ${name} you are admin`);
  } else {
    console.log(`Hi ${name} you are unknown`);
  }
} else {
  if (name == "jack") {
    console.log(`Hi ${name} you are super admin`);
  } else {
    console.log(`Hi ${name} you are unknown`);
  }
}


//ternary operator (single line if else)
condition ? if condition is true : if condition is false


var a  = 10
a > 10 ? "Hii" : "Bye"
10 > 10 // false 
"Bye"

var a = 10
a == 10 ? "Hii" : "Bye"
10 == 10 // true
"Hii"

var a  = 10
a > 10 ? a+1 : a-1
10 > 10 // false
// a-1 => 10 -1 =>  
9

var a  = 10
a == 10 ? a+1 : a-1
10 == 10 // true
//a+1  = 10 + 1
11