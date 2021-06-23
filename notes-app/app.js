const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes.js");


const notes = getNotes();
console.log(notes);

console.log(validator.default.isURL("http://gmail.com"));
console.log(chalk.blue("Using chalk"));

const command = process.argv[2];

// customize yargs version
yargs.version("1.1.0");

// Creating add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note!");
  }
});

// Creating remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function() {
    console.log("Removing the note!");
  }
});

// Creating list command
yargs.command({
  command: "list",
  describe: "To list all notes",
  handler: function() {
    console.log("Listing all notes!");
  }
});

// Creating read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading the note!");
  }
});

// to create yargs custom commands
// add, remove, read, list

console.log(process.argv); // to read the command line arguments ex: node app.js Ankit
console.log(yargs.argv);


if(command === "Add") {
  console.log("Adding note!!");
} else if (command === "Remove") {
  console.log("Removing note!!");
}












// const name = require("./utils.js");
// const add = require("./utils.js");
// const sum = add (4,-2);
// console.log(sum);



// const fs = require("fs");
//  fs.writeFileSync("notes.txt","this file was created by Node.js!")
// fs.appendFileSync("notes.txt","\nthis is appended text")
