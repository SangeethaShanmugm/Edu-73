console.log(Math.random());
//0.2265652554932498
console.log(Math.random() * 100);
//46.71029944068474

Math.floor(10.1);
10;

Math.floor(10.9);
10;

Math.ceil(10.1);
11;
Math.ceil(10.9);
11;

Math.ceil(10.5);
11;

console.log(Math.floor(Math.random()));
0;
console.log(Math.ceil(Math.random()));
1;

Math.round(10.1);
10;
Math.round(10.4);
10;
Math.round(10.5);
11;
Math.round(10.9);
11;

console.log(Math.floor(Math.random() * 10000));
console.log(Math.floor(Math.random() * 1000));

// Math.floor(Math.random() * (max - min)) + min;

console.log(Math.floor(Math.random() * (45 - 12)) + 12);

console.log(Math.tan(1));
//1.5574077246549023
console.log(Math.sin(5));
//-0.9589242746631385

console.log(Math.pow(3, 6));
//729

Math.log(1); // 0
Math.log(0); // -Infinity

console.log(Math.E);
//2.718281828459045
Math.PI;
//3.14
console.log(Math.PI);
//3.141592653589793
console.log(Math.PI.toFixed(3));
//3.142