const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

// Customize yargs version'
yargs.version('6.9.0');

// Add , remove, read, list
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        desc: {
            describe: 'Note describe',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.desc);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler () {
        notes.listNotes();
    }
});

yargs.parse();