true - 1;
false - 0;

true + true;
1 + 1;
2;
true + false;
1 + 0;
1;

false + false;
0;

10 + true;
11;

"Hii" + true;
("Hiitrue");

"true" + "true";
("truetrue");

"true" - "true";
NaN;

//parseInt

var a = "10";
var b = "20";
a + b;
("1020");
parseInt(a);
10;
parseInt(b);
20;
parseInt(a) + parseInt(b);
30;

var a = "10.34";
var b = "20.11";
parseInt(a) + parseInt(b);
30;
parseFloat(a) + parseFloat(b);
30.45;

var a = "10";
var b = "20";
parseFloat(a) + parseFloat(b);
30;

var a = "10.34";
var b = "20.11";
parseInt(a) + parseInt(b);
30;

var a = "hii";
parseInt(a);
NaN;

//ES6

var a = "10.34";
var b = "20.11";
Number(a) + Number(b);
30.45;

var a = "10";
var b = "20";
Number(a) + Number(b);
30;

var a = "123Delhi";
var b = "Delhi123";
var c = "123Delhi456";

parseInt(a);
123;
parseInt(b);
NaN;
parseInt(c);
123;

console.log(Number(a));
Number(a);
NaN;
console.log(Number(b));
console.log(Number(c));
Number(b);
NaN;
Number(c);
NaN;
