//NOnoN0nOYes (Note taking app)
//SAVE A NOTE
const notes = [];
function saveNote(content, id) {
  const note = new Object();
  note.content = content;
  note.id = id;
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Finish homework", 3);

console.log(notes);

//GET A NOTE
function getNote(id) {
  for (let note of notes) {
    if (note.id === id) {
      return note;
    } 
  }
  return `Error!`;
}

const firstNote = getNote(3);
console.log(firstNote);

//LOG OUT NOTES
function logOutNotesFormatted() {
  notes.forEach((note) => {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  });
}

logOutNotesFormatted();

//UNIQUE FEATURE - delete note
function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
      return notes;
    }
  }
  return `There is no notes with id: ${id}.`
}

console.log(deleteNote(2));