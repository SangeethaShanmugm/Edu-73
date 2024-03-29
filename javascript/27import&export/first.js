let dbObj = {}; //named export
dbObj.user = [
  {
    uname: "Jack",
    city: "Boston",
  },
  {
    uname: "John",
    city: "London",
  },
];

dbObj.calc = {
  sum: function (a, b) {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
};

//es5 export
// module.exports = dbObj;

//es6
 export default dbObj; //default export

//2 types -  import and export
// 1. named import and export - prefered
// 2. default import and export

// const double = () => {
//   return a * 2;
// };

// // export { dbObj }; // named export

// const msg = () => {
//   console.log("Hello Everyone");
// };

// export { msg, double };




//es5 
// first -export 
// second - import 

const welcome = "Hello"

module.exports = welcome //es5


//es6 named export 
 
 export const welcome = "Hello"

 export const text =  "Happy Day"

 //es6 default export 

 export default const welcome = "Hello"

 