const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNote= notes.filter(function(note){
    return note.title === title;
  })

  if(duplicateNote.length === 0) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.bgGreen.white("New note added!"));
  } else {
    console.log(chalk.bgRed.whiteBright("Note title already taken!"));
  }
};

const removeNote=function(title) {
  const notes = loadNotes();
  const requestedNotes = notes.filter(function(note){
    return note.title !== title;
  })
  console.log(requestedNotes.length , notes.length);
  if(requestedNotes.length !== notes.length ) {
    saveNotes(requestedNotes);
    console.log(chalk.bgGreen(`Note with title ${title} is removed!`));
  } else {
    console.log(chalk.bgRed.whiteBright(`Error removing: title ${title} not found!`));
  }

}

const saveNotes= function(notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    // console.log(error);
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};
