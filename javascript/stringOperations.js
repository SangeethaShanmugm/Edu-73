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
