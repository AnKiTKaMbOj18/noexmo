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

const getNotes = () => {
  return "Your notes...";
};

const listNotes=()=>{
  const notes = loadNotes();
  if(notes.length> 0) {
    notes.forEach(note => console.log(chalk.bgBlue.whiteBright(note.title)));
  }
  else {
    console.log(chalk.bgRed.whiteBright("No notes found"));
  }
}

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.filter((note) => note.title === title);

  if (duplicateNote.length === 0) {
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
  listNotes
};
