const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const { getNotes, addNote, removeNote, listNotes, readNodes } = require("./notes.js");


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
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: 'string'
    }
  },
  describe: "Add a new note",
  handler(argv) {
    console.log("Adding a new note!", argv);
    console.log("Title: ", argv.title);
    console.log("Body: ", argv.body);
    addNote(argv.title, argv.body);
  }
});

// Creating remove command
yargs.command({
  command: "remove",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  describe: "remove a note",
  // handler: function(argv) {
  //   console.log("Removing the note!");
  //   removeNote(argv.title);
  // }
  handler(argv) {
    console.log("Removing the note!");
    removeNote(argv.title);
  }
});

// Creating list command
yargs.command({
  command: "list",
  describe: "To list all notes",
  handler() {
    console.log("Listing all notes!");
    listNotes();
  }
});

// Creating read command
yargs.command({
  command: "read",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  describe: "Read a note",
  handler(argv) {
    console.log("Reading the note!");
    readNodes(argv.title);
  }
});

// to create yargs custom commands
// add, remove, read, list

// console.log(process.argv); // to read the command line arguments ex: node app.js Ankit

// console.log(yargs.argv);
// alternate to yargs.argv if we dont want to run it and only want to parse and add yargs command/properties
// use yargs.parse()
yargs.parse();

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
