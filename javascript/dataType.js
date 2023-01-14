// String = "Hii" "Hello" "435" "657hfjffj" `udjdfn` 'true'
// Number = 6743 352635 43454.478    .74398475
// Boolean - true false

//es5
var a = "Hii";
var b = 10;
var c = true;

console.log("helo"); // helo
console.log(typeof a); //string
console.log(typeof b); // number
console.log(typeof c); //boolean

// var a => declaration
// a = 50 => assignment

var e = 10.5;
typeof e; //("number");

var f = "$10";
console.log(typeof f); //string

var g = `true`;
console.log(typeof g); //string

var a = 10;
var b = 20;
a + b; //(addition);
console.log(a + b);
console.log(a - b);
console.log(b % a); //20/10 = 0

5 % 2;
1;
5 % 3;
2;
5 % 4;
1;
5 % 5;
0;

2 % 4;
2;
3 % 4;
3;

var a = "Hii";
var b = " Javascript";
// a + b;// concat;
"Hii" + "Javascript";
("HiiJavascript");
var c = a + b;
console.log(c);

// a-b // NaN - Not a Number
console.log(a - b);
a * b;
NaN;
a / b;
NaN;

// string + string  = string
// string + number  = string
// number + string = string
// number + number = number

"10" + 20 + 30;
"1020" + 30;
("102030");

10 + "20" + 30;
"1020" + 30;
("102030");

var a = 10 + 20 + "30";
// 30 + "30";
// ("3030");
console.log(typeof a);

var a = "10" + 20 + 30 - 1;
//102029
console.log(typeof a);

var a = 10 + "20" + 30 - 1;
console.log(typeof a); //102029

var a = 10 + 20 + "30" - 1;
//10 + 20 + 30 - 1;
//30+"29" => 3029
console.log(a); // 30

"10" + 20;
1020
"10" -20
-10
"10"*20
200
"10"/20
0.5


"10a"-1
NaN
"10"-1
9
10-"1"
9
10-"1a"
NaN
"20"*"5"
100
"20a"*"5"
NaN




a = "30"
(+a) => 30


