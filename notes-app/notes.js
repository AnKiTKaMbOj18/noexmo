const fs = require("fs");
const chalk = require("chalk");

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    // console.log(error);
    return [];
  }
};

// command line command: node app.js
const getNotes = () => {
  return "Your notes...";
};

// command line command: node app.js read --title="title value"
const readNodes = (title) => {
  const notes = loadNotes();
  if (notes.length > 0) {
    const requestedNote = notes.find((note) => note.title === title);
    console.log("requestedNote: ", requestedNote);
    if (requestedNote) {
      console.log(chalk.blue(requestedNote.title));
    } else {
      console.log(
        chalk.redBright.redBright(`No note found for requested title: ${title}`)
      );
    }
  } else {
    console.log(chalk.red("No notes available!"));
  }
};

// command line command: node app.js list
const listNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    notes.forEach((note) => console.log(chalk.bgBlue.whiteBright(note.title)));
  } else {
    console.log(chalk.bgRed.whiteBright("No notes found"));
  }
};

// command line command: node app.js add --title="title value" --body="body value"
const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNote = notes.filter((note) => note.title === title); // note performant way
  const duplicateNote = notes.find((note) => note.title === title); // performant way
  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen.white("New note added!"));
  } else {
    console.log(chalk.bgRed.whiteBright("Note title already taken!"));
  }
};

// command line command: node app.js remove --title="value of title you want to remove"
const removeNote = (title) => {
  const notes = loadNotes();
  const requestedNotes = notes.filter((note) => note.title !== title);
  console.log(requestedNotes.length, notes.length);
  if (requestedNotes.length !== notes.length) {
    saveNotes(requestedNotes);
    console.log(chalk.bgGreen(`Note with title ${title} is removed!`));
  } else {
    console.log(
      chalk.bgRed.whiteBright(`Error removing: title ${title} not found!`)
    );
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNodes,
};
