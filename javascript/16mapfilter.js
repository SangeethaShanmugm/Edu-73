// Map
// Map is used to iterate over the Array
// It always return the same length of output array as input array
// It is used to basically apply logics (add, sub, mul, div)

var a = [4, 7, 8, 0, 2, 5, 3, 1, 7, 34, 76, 12];
var b = a.map((data) => {
  return data * 2;
});
console.log(b);
(12)[(8, 14, 16, 0, 4, 10, 6, 2, 14, 68, 152, 24)];

var a = [4, 8, 5, 23];
var b = a.map((abc) => {
  return `<p>${abc}</p>`;
});
console.log(b);
{
  (4)[("<p>4</p>", "<p>8</p>", "<p>5</p>", "<p>23</p>")];
  /* <p>4</p>
<p>8</p>
<p>5</p>
<p>23</p> */
}

// filter
// ------

// It is used to filter out the value
// It may or may not return the same length of output array as input array
// only return those data for which output or condition is true

var a = [4, 7, 8, 0, 2, 5, 3, 1, 7, 34, 76, 12];
var b = a.filter((data) => {
  return data > 20;
});
console.log(b);
(2)[(34, 76)];

var a = [-1, 0, 1, 2];
a.map((data) => {
  return data * 2;
});

//[-1, 0, 1, 2] * 2
[-2, 0, 2, 4];

var b = a.filter((data) => {
  return data * 2;
});
console.log(b);
(3)[(-1, 1, 2)];


//callback -> when you call function inside another function
a.map(() => {})