// var uname = "John";
// uname.toUpperCase();
// ("JOHN");
// uname.toLowerCase();
// ("john");

// var city =
//   "bangalore" -
//   // b a n g a l o r e
//   // 1 2 3 4 5 6 7 8 9  = length
//   // 0 1 2 3 4 5 6 7 8  = position
//   3 -
//   2 -
//   1;
// city.length;
// 9;

// city[0];
// ("b");
// city[1];
// ("a");

// city.charAt(0);
// ("b");
// city.charAt(1);
// ("a");
// city.charAt(-1);
// ("");

// city.at(0);
// ("b");
// city.at(1);
// ("a");
// city.at(-1);
// ("e");
// city.at(-2);
// ("r");

var a = "John";
var b = "john";

// a == b;
// John == john; // false
// a.toLowerCase() == b.toLowerCase();
// john == john; // true

//slice - extract the string characters

var city = "amsTerdam";
//  a    m    s    T   e     r    d     a     m
//  0    1    2   3    4     5    6      7    8
//                                     -2     -1
city.slice(1);
("msTerdam");
city.slice(2);
("sTerdam");
console.log(city.slice(2, 6));
("sTer");
console.log(city.slice(0, -1));
("amsTerda");
console.log(city.slice(0, -2));
("amsTerd");
console.log(city.slice(2, -2));
("sTerd");
console.log(city.slice(-2, 2));
("");
console.log(city.slice(-2, -1));
("a");
console.log(city.slice(-1, -2));

var city = "amsTerdam";
city.charAt(0).toUpperCase();
("A");
city.slice(1).toLowerCase();
("msterdam");
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
"A" + "msterdam";
("Amsterdam");

city = "paRIs";
// p   a    R    I   s
// 0    1    2    3   4
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
"P" + "aris";
("Paris");

var uname = "Kalyani";
// k   a    l   y    a     n     i
// 1   2    3    4    5    6     7
uname.length;
7;

var uname = "  Kalyani .  ";
uname.length;
13;
uname.trim();
("Kalyani.");

var a = "I am learning Javascript";
a.replace("Javascript", "JS");
("I am learning JS");

var a = "JavaScript I am learning Javascript";
a.replace("Javascript", "JS");
("JavaScript I am learning JS");

a.replace("JavaScript", "JS");
("JS I am learning Javascript");

var a = "JS I am learning Javascript";
a.replace(/JavaScript/g, "JS");
("JS I am learning JS");

var uname = "  Kalyani .  ";
console.log(uname.replaceAll(" ", "/"));
//Kalyani/.//

//replaceAll(pattern, replacement)

const string = "Hello everyone Hi hi";
let pattern = "hi";
let replacement = "hey";
let new_string = string.replaceAll(pattern, replacement);

console.log(new_string);
// /Hello everyone hey hey

const a1 = "Hello Everyone good good day";
console.log(a1.replace(/good/g, "?"));
//Hello Everyone ? ? day

var a = "https://github.com/SangeethaShanmugm/Edu-73";
console.log(a.split("/"));
// a.split("/")[5][("https:", "", "github.com", "SangeethaShanmugm", "Edu-73")];

var b = "https://github.com/SangeethaShanmugm?tab=repositories";
console.log(b.split("/"));
(4)[("https:", "", "github.com", "SangeethaShanmugm?tab=repositories")];
console.log(b.split("?"));
(2)[("https://github.com/SangeethaShanmugm", "tab=repositories")];

var a = "JavaScript";
console.log(a.split(""));
a.split("");
(10)[("J", "a", "v", "a", "S", "c", "r", "i", "p", "t")];
var b = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
console.log(b.toString());
("J,a,v,a,S,c,r,i,p,t");
("JavaScript");

console.log(b.toString().replaceAll(",", ""));
("JavaScript");
