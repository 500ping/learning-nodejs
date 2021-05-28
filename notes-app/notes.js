const fs = require('fs');

const getNotes = function () {
    return 'Your notes...';
};

const addNote = function (title, desc) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length ===  0) {
        notes.push( {
            title: title,
            desc: desc
        });
        saveNotes(notes);
    } else {
        console.log('Note title taken!');
    }
};

const removeNote= (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title != title;
    });

    if (notes.length !== notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log('Note removed');
    } else {
        console.log('No Note Found');
    }
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const notes = JSON.parse(dataBuffer.toString());
        return notes;
    } catch (ex) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {getNotes, addNote, removeNote};
