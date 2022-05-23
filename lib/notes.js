const fs = require("fs");
const path = require("path");
  
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify( notesArray , null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function deleteById(id, notesArray) {
    let index = 0;
    let result = false;
    notesArray.forEach(note => {
        if(note.id === id){
            notesArray.splice(index, 1);
            fs.writeFileSync(
                path.join(__dirname, '../data/db.json'),
                JSON.stringify( notesArray , null, 2)
            );
            result = true;
            return result;
        }
        index++;
    });
    return result;
}

module.exports = {
    createNewNote,
    validateNote,
    deleteById
};