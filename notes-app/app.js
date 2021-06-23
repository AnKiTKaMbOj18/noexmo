const getNotes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");

const notes = getNotes();
console.log(notes);

console.log(validator.default.isURL("http://gmail.com"));
console.log(chalk.blue("Using chalk"));



console.log(chalk);













// const name = require("./utils.js");
// const add = require("./utils.js");
// const sum = add (4,-2);
// console.log(sum);



// const fs = require("fs");
//  fs.writeFileSync("notes.txt","this file was created by Node.js!")
// fs.appendFileSync("notes.txt","\nthis is appended text")
