const fs = require("fs");

const quote = "Make everyday a little less ordinarily";

// fs.writeFile("./cool.txt", quote, () => {
//   console.log("Completed Writing");
// });

const quote2 = "Live more, worry Less🥳";
//Task - 1 - 7: 20
//Create the below file with quote 2 as a content
// /backup/
// text-1.html
// text-2.html
// text-3.html
//...
// text-10.html

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, () => {
//     console.log(`Completed Writing text-${i}.html`);
//   });
// }

const [, , noofFiles] = process.argv;
console.log(noofFiles);

const quote3 = "Happy day🥳🥳";

// for (let i = 1; i <= noofFiles; i++) {
//   fs.writeFile(`./backup/note-${i}.txt`, quote3, () => {
//     console.log(`Completed Writing note-${i}.txt`);
//   });
// }

// fs.readFile("./cool123.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error❌", err);
//   }
//   console.log("The content of the file is", data);
// });

const quote4 = "\nTake Care";

fs.appendFile("./nice.txt", quote4, () => {
  console.log("Completed Writing");
});
