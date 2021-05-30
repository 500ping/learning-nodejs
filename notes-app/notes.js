const fs = require('fs');

const addNote = (title, desc) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
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
    const notesToKeep = notes.filter((note) => note.title != title);

    if (notes.length !== notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log('Note removed');
    } else {
        console.log('No Note Found');
    }
};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(note);
    })
    return notes;
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(note);
    } else {
        console.log('No note found!!!');
    }
};

const loadNotes = () => {
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

module.exports = {
    addNote, 
    removeNote, 
    listNotes, 
    readNote
};
